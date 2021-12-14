<template>
  <div class="navContainer">
    <button v-if=false>Sign up</button>
    <button v-if=false>Log in</button>
    <div class="greeting" v-if=true>
      <p>Hi there, User</p>
    </div>
    <button v-if=true>Log out</button>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.navContainer {
    display: flex;
    justify-content: right;
    margin-top: 30px;
    margin-bottom: 15px;
}

button {
  margin-left: 30px;
  padding: 10px 10px;
  background: var(--task-box);
  border-radius: 5px;
  font-size: 14px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}

.greeting {
  padding: 10px 10px;
}
</style>