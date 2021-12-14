<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="New Task" v-model="newTask" required>
      <button>Add</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'

//firebase imports
import { db } from '../firebase/config'
import { addDoc, collection } from 'firebase/firestore'

export default {
    props: ['c'],
    setup(props) {
        const newTask = ref('')

        const handleSubmit = async () => {
            //This is what I'll need to replace with a property in order to allow it to be added to the different lists
            const colRef = collection (db, props.c)

            await addDoc(colRef, {
                title: newTask.value
            })
            console.log(props.c)

            //reset the form
            newTask.value = ''
        }

        return { newTask, handleSubmit }
    }
    
}
</script>

<style>

</style>