<template>
  <div class="container2">
      <h2>Done</h2>
      <div class="container-tasks done" v-for="task in tasks" :key="task.id" >
        <div v-if="!task.isEditing">
             <button class="icons" @click="handleMove(task, task.collection)"><Icon icon="ic:round-done" /></button>
            {{task.title}}
        </div>

        <form class="task-form" @submit.prevent="handleEdit(task)" v-if="task.isEditing">
            <input class="newtask-input" type="text" :placeholder="task.title" v-model="editedTask">
            <button class="icons" id="edit-task"><Icon icon="mdi:pencil-outline" /></button>    
        </form>

        <div class="container-buttons" v-if="!task.isEditing">
            <button class="icons" @click="task.isEditing=!taskisEditing"><Icon icon="mdi:pencil-outline" /></button>
            <button class="icons" @click="handleMove(task, 'ToDo')"><Icon icon="ic:outline-format-list-bulleted" /></button>
            <button class="icons" @click="handleMove(task, 'Standby')"><Icon icon="ic:outline-watch-later" /></button>
            <button class="icons" @click="handleDelete(task)"><Icon icon="mdi:trash-can-outline" /></button>
        </div> 
         
     </div>
  </div>
  
</template>

<script>
import getCollection from '../composables/getCollection'
import deleteTask from '../composables/deleteTask'
import addTask from '../composables/addTask'
import { Icon } from '@iconify/vue'
import getUser from '../composables/getUser'
import { ref } from '@vue/reactivity'

//firebase imports
import { db } from '../firebase/config'
import { updateDoc, doc } from 'firebase/firestore'

export default {
    components: { Icon },
    setup(){
        const col = "Done"
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

        const editedTask = ref('')

        const handleEdit = async (task) => {
            if(editedTask.value) {
                const docRef = doc(db, col, task.id )
                await updateDoc(docRef, {
                    title: editedTask.value
                })    
            }
            task.isEditing = false
            editedTask.value = ''
        }

        return { tasks, handleDelete, handleMove, handleEdit, editedTask}
    }
}
</script>

<style scoped>
button {
    opacity: 0.5;
}

</style>