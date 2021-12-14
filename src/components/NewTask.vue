<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="New Task" v-model="newTask" required>
      <button><Icon icon="ic:round-plus" /></button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'

//firebase imports
import { db } from '../firebase/config'
import { addDoc, collection } from 'firebase/firestore'
import { Icon } from '@iconify/vue'

export default {
    props: ['c'],
    components: { Icon },
    setup(props) {
        const newTask = ref('')
        

        const handleSubmit = async () => {
            //This is how I can add it to different lists
            const colRef = collection (db, props.c)

            await addDoc(colRef, {
                title: newTask.value
            })

            //reset the form
            newTask.value = ''
        }

        return { newTask, handleSubmit }
    }
    
}
</script>

<style>

</style>