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

                            <BreadcrumbComponent :items="breadcrumbItems" />
                            <h1>{{ categoryName }}</h1>
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
import { ref, onMounted, computed, watch } from 'vue';
import LayoutTemplate from "../components/common/LayoutTemplateSimple.vue";
import BreadcrumbComponent from "../components/common/BreadCrumb.vue";
import CategoriesBar from "../components/common/CategoriesBar.vue";
import ProductsTable from "../components/common/ProductsTable.vue";
import LoaderComponent from "../components/common/LoaderComponent.vue";
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useStore } from 'vuex';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export default {
    components: {
        LayoutTemplate,
        BreadcrumbComponent,
        CategoriesBar,
        ProductsTable,
        LoaderComponent
    },
    setup() {
        const route = useRoute();
        const categoryName = computed(() => route.params.id);
        const productId = ref(null);
        const products = ref([]);
        const breadcrumbItems = ref([]);
        const searchTerm = ref('');
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

        const handleAddToCart = (product) => {
            store.dispatch('cart/addToCart', product);
            let instance = $toast.success(product.title + " agregado al carrito!");
        };

        const viewDetail = (product) => {
            router.push(`/product/${product.id}`);
        };

        const createBreadCrumb = () => {
            breadcrumbItems.value = [];
            breadcrumbItems.value.push(
                { title: "Inicio", url: "/" },
                { title: categoryName, url: `/categories/${categoryName.value}` },
            );
        };

        const fetchProducts = async () => {
            isLoading.value = true;
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName.value}`);
                products.value = response.data;
            } catch (error) {
                console.error('Error al cargar los productos:', error);
            } finally {
                isLoading.value = false;
            }
        };

        watch(() => route.params.id, () => {
            createBreadCrumb();
            fetchProducts();
        });

        onMounted(() => {
            createBreadCrumb();
            fetchProducts();
        });


        return {
            products,
            filteredProducts,
            categoryName,
            breadcrumbItems,
            searchTerm,
            viewDetail,
            handleAddToCart,
            isLoading
        };
    },
};
</script>
  
<style lang="scss" scoped>
.img-fluid {
    img {
        width: 100%;
    }

}
</style>