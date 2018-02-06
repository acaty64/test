<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Vuex</div>

                    <div class="panel-body">
                        <button @click='increment()' class="btn">ADD ONE</button>
                        &nbsp;
                        {{count}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                'count': 'countPlusOne'
            })
        },
        methods: {
            ...mapActions({
                'increment': 'increment'
            })
        },
        mounted() {
            console.log('Component mounted.')
        },
    }
</script>
