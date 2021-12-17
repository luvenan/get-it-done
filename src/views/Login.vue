<template>
  <div class="container1">
    <form @submit.prevent="handleSubmit">
      <h2>Log in</h2>
      <div class="container-tasks">
        <input class="login-input" type="email" placeholder="Email" v-model="email">
      </div>
      <div class="container-tasks">
        <input class="login-input" type="password" placeholder="Password" v-model="password">
      </div>
      
          
      <button class="submit-button" v-if="!isPending">Log in</button>
      <button class="submit-button" v-if="isPending">Loading</button>
      <div class="error" v-if="error">{{ error }}</div>
    </form>
  </div>
  
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import useLogin from '../composables/useLogin'

export default {
  setup(){
    const email = ref('')
    const password = ref('')
    const isPending = ref(false)

    const { login, error } = useLogin()
    const router = useRouter()

    const handleSubmit = async () => {
        await login(email.value, password.value)
        console.log('user is logged in')

        if(!error.value) {
            router.push('/')
        } else {
            console.log(error)
        }
    }

    return { email, password, error, isPending, handleSubmit}
  }

}
</script>

<style scoped>
.container1 {
    margin: auto;
    margin-top: 6.25rem;
    padding: 3rem 0;
    max-width: 30rem;
}

.container-tasks {
    margin-bottom: 2rem;
    margin-top: 2rem;
}
</style>