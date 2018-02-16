<template>
    <div class="container">
        <div class="panel panel-default">

            <div class="panel-heading">Counter App</div>

            <div class="panel-body">
                <div class="container">
                    <counter/>
                </div>     
            </div>
            <p>El contador es: {{ count }}</p>
        
        </div>
    </div>
</template>

<script>
    //import counterstore from '../store/counter.js'
    import Counter from './CounterComponent.vue'
    
    export default {
        components: {
            Counter
        },
        computed:{
            count(){
                return this.$store.state.count;
                //return this.$counterstore.state.count;
            }
        },
        mounted() {
            console.log('CounterApp mounted.')
        },
    }
</script>
