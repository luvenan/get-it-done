<template>
  <div class="container2">
      <h2>Done</h2>
      <div class="container-tasks done" v-for="task in tasks" :key="task.id">
        <div class="container-check-task">
             <button @click="handleMove(task, 'ToDo')"><Icon icon="ic:round-done" /></button>
            {{task.title}}
        </div>
        <div class="container-buttons">
            <button @click="handleEdit"><Icon icon="mdi:pencil-outline" /></button>
            <button @click="handleMove(task, 'ToDo')"><Icon icon="ic:outline-format-list-bulleted" /></button>
            <button @click="handleMove(task, 'Standby')"><Icon icon="ic:outline-watch-later" /></button>
            <button @click="handleDelete(task)"><Icon icon="mdi:trash-can-outline" /></button>
        </div> 
         
     </div>
  </div>
  
</template>

<script>
import getCollection from '../composables/getCollection'
import deleteTask from '../composables/deleteTask'
import addTask from '../composables/addTask'
import { Icon } from '@iconify/vue'

export default {
    components: { Icon },
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

<style scoped>
button {
    opacity: 0.5;
}

</style>