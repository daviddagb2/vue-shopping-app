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

                            <h1>{{ categoryName }}</h1>

                            <BreadcrumbComponent :items="breadcrumbItems" />

                            <ProductsTable :products="filteredProducts" @view-detail="viewDetail"
                                @add-to-cart="addToCart" />

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
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
    components: {
        LayoutTemplate,
        BreadcrumbComponent,
        CategoriesBar,
        ProductsTable
    },
    setup() {
        const route = useRoute();
        const categoryName = computed(() => route.params.id);
        const productId = ref(null);
        const products = ref([]);
        const breadcrumbItems = ref([]);
        const searchTerm = ref('');
        const router = useRouter();

        const filteredProducts = computed(() => {
            if (Array.isArray(products.value)) {
                return products.value.filter(product =>
                    product.title.toLowerCase().includes(searchTerm.value.toLowerCase())
                );
            } else {
                return [];
            }
        });

        const addToCart = product => {
            // Implementa la lógica para agregar el producto al carrito aquí
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
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName.value}`);
                products.value = response.data;
            } catch (error) {
                console.error('Error al cargar los productos:', error);
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
            addToCart,
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