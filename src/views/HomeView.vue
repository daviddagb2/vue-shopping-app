<template>
    <div>
        <h1>Lista de Productos</h1>
        <!-- Barra de búsqueda -->
        <input v-model="searchTerm" placeholder="Buscar por nombre" @input="filterProducts" />

        <!-- Tabla de productos utilizando PrimeVue's DataTable -->
        <DataTable :value="filteredProducts">
            <Column field="id" header="ID"></Column>
            <Column field="title" header="Nombre"></Column>
            <Column field="price" header="Precio"></Column>
            <Column field="category" header="Categoría"></Column>
            <Column header="Acciones">
                <template #body="{ rowData }">
                    <button @click="addToCart(rowData)">Agregar al carrito</button>
                </template>
            </Column>
        </DataTable>
    </div>
</template>
  
<script>
import { ref, computed } from 'vue';

export default {
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
  