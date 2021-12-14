<template>
  <form @submit.prevent="handleSubmit">
    <div class="container-newtask">
        <input class="newtask-input" type="text" placeholder="Add a new task..." v-model="newTask" required>
        <button id="add-task"><Icon icon="ic:round-plus" /></button>    
    </div>
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

<style scoped>
.container-newtask {
    display: flex;
    justify-content: space-between;
}

.newtask-input {
    width: 392px;
    margin-right: 3px;
    font-size: 16px;
    border: none;
}

#add-task{
    scale: 140%;
    line-height: 25px;
}
</style>