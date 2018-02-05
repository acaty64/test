<template>
    <div>            
        <div class="panel-heading">Counter Component</div>

        <div class="panel-body">
            <h2>{{ count }}</h2>
            <increment />
            <decrement />
        </div>
    </div>

</template>

<script>
    import CountStore from '../store/counter.js'
    import Increment from './Increment.vue'
    import Decrement from './Decrement.vue'

    export default {
        components: { 
            Increment,
            Decrement
        },
        computed: {
            count(){
                //return store.state.count
                return CountStore.state.count
            }
        },
        mounted() {
            console.log('CounterComponent mounted.')
        },
    }
</script>
