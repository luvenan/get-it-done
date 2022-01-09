<template>
    <div class="container1">
        <form @submit.prevent="handleSubmit">
            <h2>Sign up</h2>
            <div class="container-tasks">
                <input class="login-input" type="text" placeholder="Display name" v-model="displayName">
            </div>
            <div class="container-tasks">
                <input class="login-input" type="email" placeholder="Email" v-model="email">
            </div>
            <div class="container-tasks">
                <input class="login-input" type="password" placeholder="Password" v-model="password">
            </div>       
            
            <button class="submit-button" v-if="!isPending">Sign up</button>
            <button class="submit-button" v-if="isPending">Loading</button>
            <div class="error" v-if="error">{{ error }}</div>
            
            <router-link class="login-signup" to="/login">Already signed up? Log in here!</router-link>
        </form>
    </div>
    
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import useSignup from '../composables/useSignup'

export default {
    setup(){
    const displayName = ref('')
    const email = ref('')
    const password = ref('')
    const isPending = ref(false)

    const {signup, error } = useSignup()
    const router = useRouter()

    const handleSubmit = async () => {
        await signup(email.value, password.value, displayName.value)
        console.log('user is signed up')

        if(!error.value) {
            router.push('/')
        } else {
            console.log(error)
        }
    }

    return { displayName, email, password, error, isPending, handleSubmit}
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