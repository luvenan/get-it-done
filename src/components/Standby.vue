<template>
    <div class="container1">
        <h2>Standby</h2>
        <NewTask v-bind:c="col"/>
        <div v-for="task in tasks" :key="task.id">
            {{ task.title }}
            <button @click="handleMove(task, 'Done')">Done</button>
            <button @click="handleMove(task, 'ToDo')">To do</button>
            <button @click="handleDelete(task)">Delete</button>
        </div>
    </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import NewTask from './NewTask'
import deleteTask from '../composables/deleteTask'
import addTask from '../composables/addTask'

export default {
    components: { NewTask },
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