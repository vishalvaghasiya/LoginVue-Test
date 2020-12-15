<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Login Vue</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link">
                            Login
                        </router-link>
                        <!--                        <a class="nav-link" href="#">Login <span class="sr-only">(current)</span></a>-->
                    </li>
                    g

                    <li class="nav-item">
                        <router-link to="/register" class="nav-link"> Reg</router-link>
                        <!--<a class="nav-link" href="#">Register</a>-->
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "headerCustom"
    }
</script>

<style scoped>

</style>
