<template>
    <div class="row">
        <div class="col-md-2">
        </div>
        <div class="layout-column col-md-10">
            <div id="main">
                <headerComponent></headerComponent>
                <router-view class="col-md-12"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import headerComponent from "./common/headerComponent";

    export default {
        name: "App",
        components: {
            'headerComponent': headerComponent
        },
        mounted() {
            console.log('Component mounted.')
        }
    }

</script>

<style scoped>
    #main {
        width: 1000px;
    }
</style>
