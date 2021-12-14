<template>
    <div class="container1">
        <h2>Standby</h2>
        <div class="container-tasks">
            <NewTask v-bind:c="col"/>
        </div>      
        <div class="container-tasks" v-for="task in tasks" :key="task.id">
            {{ task.title }}
            <button @click="handleMove(task, 'Done')"><Icon icon="ic:round-done" /></button>
            <button @click="handleMove(task, 'ToDo')"><Icon icon="ic:outline-format-list-bulleted" /></button>
            <button @click="handleDelete(task)"><Icon icon="mdi:trash-can-outline" /></button>
        </div>
    </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import NewTask from './NewTask'
import deleteTask from '../composables/deleteTask'
import addTask from '../composables/addTask'
import { Icon } from '@iconify/vue'

export default {
    components: { NewTask, Icon },
    setup(){
        const { documents: tasks } = getCollection('Standby')
        const col = "Standby"

        const handleDelete = (task) => {
           deleteTask(task, col)
        }

        const handleMove = async (task, targetCol) => {
            deleteTask(task, col)
            addTask(task, targetCol)
        }    
        

        return { tasks, col, handleDelete, handleMove }
    }
}
</script>

<style>

</style>