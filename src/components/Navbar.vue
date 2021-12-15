<template>
  <div class="navContainer">
    <router-link class="nav-button" to="/signup" v-if="!user">Sign up</router-link>
    <router-link class="nav-button" to="/login" v-if="!user">Log in</router-link>
    <div class="greeting" v-if="user">
      <p>Logged in as {{ user.email }}</p>
    </div>
    <button class="nav-button" v-if="user" @click="logOut">Log out</button>
  </div>

</template>

<script>
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import { watchEffect } from 'vue'

//firebase imports
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'

export default {
  setup(){
   const { user } = getUser()
   const router = useRouter()

   const logOut = () => {
     signOut(auth)
   }

   watchEffect(() => {
     if(!user.value) {
       router.push('/login')
     }
   })

   return { logOut, user }
  }
}
</script>

<style scoped>
.navContainer {
    display: flex;
    justify-content: right;
    margin-top: 30px;
    margin-bottom: 15px;
}

.nav-button {
  margin-left: 30px;
  padding: 10px 12px;
  background: var(--task-box);
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: var(--task-text);
  text-decoration: none;
}

.greeting {
  padding: 10px 10px;
  color: var(--task-text);
}
</style>