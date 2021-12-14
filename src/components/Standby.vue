<template>
    <div class="container1">
        <h2>Standby</h2>
        <div v-for="task in data" :key="task.id">
            {{ task.title }}
            <button>Done</button>
            <button>To do</button>
            <button>Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    setup(){
        const data = [
            {
                title: 'Fourth task',
                id: 4
            }, 
            {
                title: 'Fifth task',
                id: 5
            }, 
            {
                title: 'Sixth task',
                id: 6
            }
        ]

        return { data }
    }
}
</script>

<style>

</style>