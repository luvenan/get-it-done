<template>
  <div class="container1">
    <form @submit.prevent="handleSubmit">
      <h2>Login</h2>
      <div class="container-tasks">
        <input type="email" placeholder="Email" v-model="email">
      </div>
      <div class="container-tasks">
        <input type="password" placeholder="Password" v-model="password">
      </div>
          
      <div class="error" v-if="error">{{ error }}</div>
      <button class="submit-button" v-if="!isPending">Log in</button>
      <button class="submit-button" v-if="isPending">Loading</button>
    </form>
  </div>
  
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup(){
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const isPending = ref(false)

    return { email, password, error, isPending}
  }

}
</script>

<style scoped>
input {
    width: 400px;
    font-size: 16px;
    border: none;
    margin: auto;
}

.container1 {
    margin: auto;
    margin-top: 100px;
    padding: 50px 0;
}

.container-tasks {
    margin-bottom: 30px;
    margin-top: 30px;
}
</style>