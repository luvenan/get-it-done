<template>
  <div class="container2">
      <h2>Done</h2>
      <div v-for="task in tasks" :key="task.id">
         {{task.title}} 
         <button>To do</button>
         <button>Standby</button>
         <button>Delete</button>
     </div>
  </div>
  
</template>

<script>
import { ref } from '@vue/reactivity'
import getCollection from '../composables/getCollection'

export default {
    setup(){
        const { documents: tasks } = getCollection('Done')

        return { tasks }
    }
}
</script>

<style>

</style>