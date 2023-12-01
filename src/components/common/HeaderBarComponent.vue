<template>
    <header class="navbar navbar-expand navbar-dark bd-navbar">
        <div class="container-fluid">

            <RouterLink :to="'/'" :class="'navbar-brand  d-none d-md-block'">
                <strong>Vue Shopping Store</strong>
            </RouterLink>

            <button class="navbar-brand btn btn-link d-block d-md-none" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#bdSidebar" aria-controls="bdSidebar">
                <font-awesome-icon :icon="['fas', 'bars']" class="iconNavheader" />
            </button>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

        </div>
    </header>
</template>
  
<script>
import { computed } from "vue";

export default {
    props: {
        icon: String,
        variant: String,
        title: String,
    },
    data() {
        return {
            searchQuery: "",
        };
    },
    methods: {
        search() {
            // Aquí puedes implementar la lógica de búsqueda según tus necesidades
            console.log("Realizar búsqueda con:", this.searchQuery);
        },
    },
};
</script>
  
<style scoped>
/* Estilos CSS personalizados aquí si es necesario */
</style>
  