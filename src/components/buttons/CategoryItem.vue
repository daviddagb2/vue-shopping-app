<template>
    <div class="d-grid gap-2">
        <router-link :to="`/categories/${title}`" class="btn btn-link btn-block">{{ title }}</router-link>
    </div>
</template>
  
<script>
import { computed } from "vue";

export default {
    props: {
        title: String,
    },
    setup(props) {
        const isSelected = computed(() => {
            // Lógica para determinar si este botón está seleccionado
            return true; // Cambia esto según tus necesidades
        });

        return {
            isSelected,
        };
    },
};
</script>
  
<style scoped>
.category-button {
    width: 100%;
    text-align: center;
    padding: 10px 0;

    button {
        width: 100%;
    }
}

.category-button .badge {
    cursor: pointer;
    font-size: 1.2rem;
    border: none;
    border-radius: 0;
    background-color: transparent;
    color: #000;
    /* Color del texto */
    transition: background-color 0.3s, color 0.3s;
}

.category-button .badge:hover {
    background-color: #007bff;
    /* Color de fondo al pasar el mouse */
    color: #fff;
    /* Color del texto al pasar el mouse */
}
</style>