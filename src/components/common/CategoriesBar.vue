<template>
    <div class="categorybar pt-4">

        <h2>Categorías</h2>

        <div v-for="(category, index) in categories" :key="index">
            <CategoryItem :title="category" />
        </div>

    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import CategoryItem from "../buttons/CategoryItem.vue";

export default {
    components: {
        CategoryItem
    },
    setup() {
        const categories = ref([]);

        const fetchCategories = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/categories`);
                categories.value = response.data;
            } catch (error) {
                console.error('Error al cargar las categorías:', error);
            }
        };

        // Carga la lista de productos al cargar la página
        onMounted(() => {
            fetchCategories();
        });

        return {
            categories,
        };
    },
};
</script>

<style lang="scss" scoped>
.categorybar {
    background-color: #f5f5f5;
    height: 100vh;

    h2 {
        margin-bottom: 25px;
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 400;
        color: #000;
    }
}

@media (max-width: 767px) {
    .categorybar {
        background-color: #f5f5f5;
        min-height: 250px;
        padding-bottom: 10px;
        height: auto;

        h2 {
            margin-bottom: 25px;
        }
    }
}
</style>