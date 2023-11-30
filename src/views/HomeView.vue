<template>
    <LayoutTemplate>

        <template v-slot:content-slot>

            <div class="container">

                <div class="row">

                    <div class="col-md-2 px-0">
                        <CategoriesBar />
                    </div>

                    <div class="col">
                        <div class="mainproductscontent">
                            <h1>Mejores Artículos de Oferta</h1>

                            <DataTable :value="filteredProducts">

                                <PrimeColumn header="Imagen">
                                    <template #body="slotProps">
                                        <ImagePrime :src="slotProps.data.image" alt="Image" width="80" preview />
                                    </template>
                                </PrimeColumn>

                                <PrimeColumn header="Nombre" style="max-width: 240px;">
                                    <template #body="slotProps">
                                        <router-link :to="`/product/${slotProps.data.id}`">{{ slotProps.data.title
                                        }}</router-link>
                                    </template>
                                </PrimeColumn>

                                <PrimeColumn field="category" header="Categoría"></PrimeColumn>
                                <PrimeColumn field="price" header="Precio"></PrimeColumn>


                                <PrimeColumn header="Acciones">
                                    <template #body="{ rowData }">
                                        <button @click="addToCart(rowData)">Agregar al carrito</button>
                                    </template>
                                </PrimeColumn>
                            </DataTable>
                        </div>

                    </div>


                </div>


            </div>



        </template>
    </LayoutTemplate>
</template>
  
<script>
import { ref, computed, onMounted } from 'vue';
import LayoutTemplate from "../components/common/LayoutTemplateSimple.vue";
import axios from 'axios';
import CategoriesBar from "../components/common/CategoriesBar.vue";

export default {
    components: {
        LayoutTemplate,
        CategoriesBar
    },
    setup() {
        const searchTerm = ref('');
        const products = ref([]);

        const filteredProducts = computed(() => {
            // Verifica si products.value es un arreglo antes de aplicar el filtro
            if (Array.isArray(products.value)) {
                return products.value.filter(product =>
                    product.title.toLowerCase().includes(searchTerm.value.toLowerCase())
                );
            } else {
                // Si products.value no es un arreglo (por ejemplo, aún está vacío), devuelve un arreglo vacío
                return [];
            }
        });

        // Método para agregar un producto al carrito (debes implementar esto según tu lógica)
        const addToCart = product => {
            // Implementa la lógica para agregar el producto al carrito aquí
        };

        // Método para cargar la lista de productos desde la API (debes implementar esto)
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`);
                products.value = response.data;
                console.log(response.data);
            } catch (error) {
                console.error('Error al cargar los productos:', error);
            }
        };



        // Método para filtrar productos cuando se realiza una búsqueda
        const filterProducts = () => {
            // Esto se manejará automáticamente a través de la propiedad "filteredProducts" calculada
        };

        // Carga la lista de productos al cargar la página
        onMounted(() => {
            fetchProducts();
        });

        const rating = ref(3); // Valor inicial de la calificación

        return {
            rating,
            searchTerm,
            products,
            filteredProducts,
            addToCart,
            filterProducts,
        };
    },
};
</script>
  