<template>
  <div class="container2">
      <h2>Done</h2>
      <div v-for="task in data" :key="task.id">
         {{task.title}} 
         <button>To do</button>
         <button>Standby</button>
         <button>Delete</button>
     </div>
  </div>
  
</template>

<script>
export default {
    setup(){
        const data = [
            {
                title: 'Seventh task',
                id: 7
            }, 
            {
                title: 'Eighth task',
                id: 8
            }, 
            {
                title: 'Nineth task',
                id: 9
            }
        ]

        return { data }
    }
}
</script>

<style>

</style>