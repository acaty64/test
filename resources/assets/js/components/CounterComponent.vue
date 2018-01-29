<template>
    <div>            
        <div class="panel-heading">Counter Component</div>

        <div class="panel-body">
            <h2>{{ count }}</h2>
            <increment @increment='increment'/>
            <decrement @decrement='decrement'/>
        </div>
    </div>

</template>

<script>
    import Increment from './Increment.vue'
    import Decrement from './Decrement.vue'

    export default {
        components: { 
            Increment,
            Decrement
        },
        mounted() {
            console.log('CounterComponent mounted.')
        },
        data(){
            return {
                count: 0
            }
        },
        methods: {
            increment() {
                this.count++
            },
            decrement() {
                this.count--
            },
        }
    }
</script>
