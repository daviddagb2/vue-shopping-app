<template>
    <LayoutTemplate>
        <template v-slot:content-slot>
            <h1>Cart</h1>

            <PrimeButton>Button Prime</PrimeButton>


        </template>
    </LayoutTemplate>
</template>
  
<script>
import { ref, computed } from 'vue';
import LayoutTemplate from "../components/common/LayoutTemplateSimple.vue";

export default {
    components: {
        LayoutTemplate
    },
    setup() {
        const searchTerm = ref('');
        const products = ref([]); // La lista completa de productos obtenidos de la API

        const filteredProducts = computed(() => {
            // Filtra los productos según el término de búsqueda
            return products.value.filter(product =>
                product.title.toLowerCase().includes(searchTerm.value.toLowerCase())
            );
        });

        // Método para agregar un producto al carrito (debes implementar esto según tu lógica)
        const addToCart = product => {
            // Implementa la lógica para agregar el producto al carrito aquí
        };

        // Método para cargar la lista de productos desde la API (debes implementar esto)
        const fetchProducts = () => {
            // Implementa la lógica para obtener los productos de la API aquí
        };

        // Método para filtrar productos cuando se realiza una búsqueda
        const filterProducts = () => {
            // Esto se manejará automáticamente a través de la propiedad "filteredProducts" calculada
        };

        // Carga la lista de productos al cargar la página
        fetchProducts();

        return {
            searchTerm,
            products,
            filteredProducts,
            addToCart,
            filterProducts,
        };
    },
};
</script>
  