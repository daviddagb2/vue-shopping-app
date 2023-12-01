<template>
    <LayoutTemplate>
        <template v-slot:content-slot>

            <div class="container">
                <div class="row">
                    <div class="col-md-2 px-0">
                        <CategoriesBar />
                    </div>

                    <div class="col-md-10">

                        <LoaderComponent v-if="isLoading" />

                        <div class="mainproductscontent" v-if="!isLoading">
                            <h1>Mejores Artículos de Oferta</h1>

                            <div class="ml-auto">
                                <div class="input-group">
                                    <input type="text" class="form-control form-control-sm" v-model="searchTerm"
                                        placeholder="Buscar productos..." />
                                </div>
                            </div>

                            <ProductsTable :products="filteredProducts" @view-detail="viewDetail"
                                @add-to-cart="handleAddToCart" />

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
import ProductsTable from "../components/common/ProductsTable.vue";
import LoaderComponent from "../components/common/LoaderComponent.vue";
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export default {
    components: {
        LayoutTemplate,
        CategoriesBar,
        ProductsTable,
        LoaderComponent
    },
    setup() {
        const searchTerm = ref('');
        const products = ref([]);
        const router = useRouter();
        const store = useStore();
        const $toast = useToast();
        const isLoading = ref(false);

        const filteredProducts = computed(() => {
            if (Array.isArray(products.value)) {
                return products.value.filter(product =>
                    product.title.toLowerCase().includes(searchTerm.value.toLowerCase())
                );
            } else {
                return [];
            }
        });

        const viewDetail = (product) => {
            router.push(`/product/${product.id}`);
        };

        const handleAddToCart = (product) => {
            store.dispatch('cart/addToCart', product);
            let instance = $toast.success(product.title + " agregado al carrito!");
        };

        const fetchProducts = async () => {
            isLoading.value = true;
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`);
                products.value = response.data;
            } catch (error) {
                console.error('Error al cargar los productos:', error);
            } finally {
                isLoading.value = false;
            }
        };

        const filterProducts = () => {
            // Esto se manejará automáticamente a través de la propiedad "filteredProducts" calculada
        };

        onMounted(() => {
            fetchProducts();
        });

        return {
            searchTerm,
            products,
            filteredProducts,
            handleAddToCart,
            filterProducts,
            viewDetail,
            isLoading
        };
    },
};
</script>
  