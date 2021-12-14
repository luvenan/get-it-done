<template>
  <div class="container2">
      <h2>Done</h2>
      <div v-for="task in tasks" :key="task.id">
         {{task.title}} 
         <button @click="handleMove(task, 'ToDo')">To do</button>
         <button @click="handleMove(task, 'Standby')">Standby</button>
         <button @click="handleDelete(task)">Delete</button>
     </div>
  </div>
  
</template>

<script>
import getCollection from '../composables/getCollection'
import deleteTask from '../composables/deleteTask'
import addTask from '../composables/addTask'


export default {
    setup(){
        const { documents: tasks } = getCollection('Done')

        const col = "Done"

        const handleDelete = (task) => {
           deleteTask(task, col)
        }

        
        const handleMove = async (task, targetCol) => {
            deleteTask(task, col)
            addTask(task, targetCol)
        }

        return { tasks, handleDelete, handleMove}
    }
}
</script>

<style>

</style>