<template>
  <div class="navContainer">
    <router-link class="nav-button" to="/signup" v-if="!isUser">Sign up</router-link>
    <router-link class="nav-button" to="/login" v-if="!isUser">Log in</router-link>
    <div class="greeting" v-if="isUser">
      <p>Hi there, User</p>
    </div>
    <button class="nav-button" v-if="isUser">Log out</button>
  </div>

</template>

<script>
export default {
  setup(){
   const isUser = false

   return { isUser }
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