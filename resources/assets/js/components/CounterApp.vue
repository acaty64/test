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
    import Counter from './CounterComponent.vue'
    export default {
        components: {
            Counter
        },
        mounted() {
            console.log('CounterApp mounted.')
        },
        data(){
            return {
                count: 0
            }
        }
    }
</script>
