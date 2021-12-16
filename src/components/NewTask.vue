<template>
  <div class="container-newtask">
    <form @submit.prevent="handleSubmit">
        <input class="newtask-input" type="text" placeholder="Add a new task..." v-model="newTask" required>
        <button class="icons" id="add-task"><Icon icon="ic:round-plus" /></button>    
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import { Icon } from '@iconify/vue'

//firebase imports
import { db } from '../firebase/config'
import { addDoc, collection } from 'firebase/firestore'


export default {
    props: ['c'],
    components: { Icon },
    setup(props) {
        const newTask = ref('')
        const { user } = getUser()
        

        const handleSubmit = async () => {
            //This is how I can add it to different lists
            const colRef = collection (db, props.c)

            await addDoc(colRef, {
                title: newTask.value,
                userUid: user.value.uid,
                collection: props.c,
                isEditing: false
            })

            //reset the form
            newTask.value = ''
        }

        return { newTask, handleSubmit, user }
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