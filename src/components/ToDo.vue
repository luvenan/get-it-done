<template>
  <div class="container1">
     <h2>To do</h2>
     <div v-for="task in data" :key="task.id">
        {{task.title}}
        <button>Done</button>
        <button>Standby</button>
        <button>Delete</button>
     </div>
  </div>
  
</template>

<script>
import { ref } from '@vue/reactivity'

//firebase imports
import { db } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

export default {
    setup(){
        const data = ref([])

        const colRef = collection(db, 'ToDo')

        getDocs(colRef)
            .then(snapshot => {
                let docs = []
                snapshot.docs.forEach(doc => {
                    docs.push({...doc.data(), id: doc.id })
                })
                data.value = docs
            })

        return { data }
    }
}
</script>

<style>

</style>