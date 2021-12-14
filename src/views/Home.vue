<template>
  <div class="home1">
    <ToDo />
    <Standby />
  </div>
  <div class="home2">
    <Done />
  </div>
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

<style>



</style>