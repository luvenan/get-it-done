<template>
  <div class="container1">
     <h2>To do</h2>
     <NewTask v-bind:c="ToDo"/>
     <div v-for="task in tasks" :key="task.id">
        {{task.title}}
        <button>Done</button>
        <button>Standby</button>
        <button>Delete</button>
     </div>
  </div>
  
</template>

<script>
import { ref } from '@vue/reactivity'
import NewTask from './NewTask'
import getCollection from '../composables/getCollection'

export default {
    components: { NewTask },
    setup(){
        const { documents: tasks } = getCollection('ToDo')
        const ToDo ="ToDo"

        return { tasks, ToDo }
    }
}
</script>

<style>

</style>