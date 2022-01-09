<template>
    <div class="container1">
        <h2>Standby</h2>
        <NewTask v-bind:c="col"/>
        <div class="container-tasks" v-for="(task, index) in tasks" :key="task.id">
            <div v-if="!task.isEditing">
                <button class="icons" @click="handleMove(task, 'Done')"><Icon icon="ic:round-done" /></button>
                {{ task.title }}                
            </div>

            <form class="task-form" @submit.prevent="handleEdit(task, index)" v-if="task.isEditing">
                <input class="newtask-input" type="text" v-model="editedTask[index]">
                <button class="icons" id="edit-task"><Icon icon="mdi:pencil-outline" /></button>    
            </form>

            <div class="container-buttons" v-if="!task.isEditing">
                <button class="icons" @click="beginEdit(task, index)"><Icon icon="mdi:pencil-outline" /></button>
                <button class="icons" @click="handleMove(task, 'ToDo')"><Icon icon="ic:outline-format-list-bulleted" /></button>
                <button class="icons" @click="handleDelete(task)"><Icon icon="mdi:trash-can-outline" /></button>
            </div>

        </div>
    </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import NewTask from './NewTask'
import deleteTask from '../composables/deleteTask'
import addTask from '../composables/addTask'
import { Icon } from '@iconify/vue'
import getUser from '../composables/getUser'
import { ref } from '@vue/reactivity'

//firebase imports
import { db } from '../firebase/config'
import { updateDoc, doc } from 'firebase/firestore'

export default {
    components: { NewTask, Icon },
    setup(){
        const col = "Standby"
        const { user } = getUser()
        const { documents: tasks } = getCollection(
            col,
            ['userUid', '==', user.value.uid ]
        )

        const handleDelete = (task) => {
           deleteTask(task, col)
        }

        const handleMove = async (task, targetCol) => {
            deleteTask(task, col)
            addTask(task, targetCol)
        }    

        const editedTask = ref([])

        const beginEdit = (task, index) =>
        { 
            task.isEditing = true
            editedTask.value[index] = task.title
        }

        const handleEdit = async (task, index) => {
            const docRef = doc(db, col, task.id)
            await updateDoc(docRef, {
                title: editedTask.value[index]
            })    
            task.isEditing = false
        }

        return { tasks, col, handleDelete, handleMove, handleEdit, editedTask, beginEdit }
    }
}
</script>

<style>

</style>