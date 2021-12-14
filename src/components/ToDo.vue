<template>
  <div class="container1">
     <h2>To do</h2>
     <NewTask v-bind:c="col"/>
     <div v-for="task in tasks" :key="task.id">
        {{task.title}}
        <button @click="handleMove(task, 'Done')">Done</button>
        <button @click="handleMove(task, 'Standby')">Standby</button>
        <button @click="handleDelete(task)">Delete</button>
     </div>
  </div>
  
</template>

<script>
import NewTask from './NewTask'
import getCollection from '../composables/getCollection'
import deleteTask from '../composables/deleteTask'
import addTask from '../composables/addTask'

export default {
    components: { NewTask },
    setup(){
        const { documents: tasks } = getCollection('ToDo')
        const col ="ToDo"

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