<template>
    <div class="container1">
        <h2>Standby</h2>
        <NewTask v-bind:c="Standby"/>
        <div v-for="task in tasks" :key="task.id">
            {{ task.title }}
            <button>Done</button>
            <button>To do</button>
            <button>Delete</button>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getCollection from '../composables/getCollection'
import NewTask from './NewTask'

export default {
    components: { NewTask },
    setup(){
        const { documents: tasks } = getCollection('Standby')
        const Standby = "Standby"

        return { tasks, Standby }
    }
}
</script>

<style>

</style>