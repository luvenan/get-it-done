<template>
  <div class="navContainer">
    <router-link class="nav-button" to="/signup" v-if="!user && $route.name !== 'Signup'">Sign up</router-link>
    <router-link class="nav-button" to="/login" v-if="!user && $route.name !== 'Login'">Log in</router-link>
    <div class="greeting" v-if="user">
      <p>Hi, {{ user.displayName }} </p>
    </div>
    <button class="nav-button" v-if="user" @click="logOut">Log out</button>
  </div>

</template>

<script>
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'

//firebase imports
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'

export default {
  setup(){
   const { user } = getUser()
   const router = useRouter()

   const logOut = () => {
     signOut(auth)
      router.push('/login')
   }

   return { logOut, user }
  }
}
</script>

<style scoped>
.navContainer {
    display: flex;
    justify-content: right;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.nav-button {
  margin-left: 2rem;
  padding: 0.625rem 0.75rem;
  background: var(--task-box);
  border-radius: 0.25rem;
  font-size: 1rem;
  box-shadow: 0 0.125rem 0.125rem rgba(0, 0, 0, 0.25);
  color: var(--task-text);
  text-decoration: none;
  border: none;
}

.greeting {
  padding: 0.625rem 0.625rem;
  color: var(--task-text);
}
</style>