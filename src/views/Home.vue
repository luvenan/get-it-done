<template>
  <div class="container-grid">
    <div class="home1">
      <ToDo />
      <Standby />
    </div>
    <div class="home2">
      <Done />
    </div>
  </div>
  <div class="container-footer"></div>
  
</template>

<script>
import ToDo from '../components/ToDo.vue'
import Standby from '../components/Standby.vue'
import Done from '../components/Done.vue'

export default {
  name: 'Home',
  components: { ToDo, Standby, Done }
}
</script>

<style scoped>

@media (min-width: 800px) {
    .home1 {
        flex-direction: row;
    }

    .container1 {
        width: 49%;
    }
}

</style>