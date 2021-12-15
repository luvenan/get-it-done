<template>
  <div class="container1">
     <h2>To do</h2>
     <div class="container-tasks">
         <NewTask v-bind:c="col"/>
     </div>
     <div class="container-tasks" v-for="task in tasks" :key="task.id">
        <div class="container-check-task">
            <button class="icons" @click="handleMove(task, 'Done')"><Icon icon="ic:round-done" /></button>
            {{task.title}}
        </div>
        <div class="container-buttons">
            <button class="icons" @click="handleEdit"><Icon icon="mdi:pencil-outline" /></button>
            <button class="icons" @click="handleMove(task, 'Standby')"><Icon icon="ic:outline-watch-later" /></button>
            <button class="icons" @click="handleDelete(task)"><Icon icon="mdi:trash-can-outline" /></button>   
        </div>
     </div>
  </div>
  
</template>

<script>
import NewTask from './NewTask'
import getCollection from '../composables/getCollection'
import deleteTask from '../composables/deleteTask'
import addTask from '../composables/addTask'
import { Icon } from '@iconify/vue'

export default {
    components: { NewTask, Icon },
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

        const handleEdit = () => {

        }

        return { tasks, col, handleDelete, handleMove, handleEdit }
    }
}
</script>

<style>

</style>