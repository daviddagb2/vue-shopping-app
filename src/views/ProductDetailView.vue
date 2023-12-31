<template>
    <LayoutTemplate>
        <template v-slot:content-slot>
            <div class="container" style="max-width: 900px;">

                <BreadcrumbComponent :items="breadcrumbItems" />

                <div class="row" v-if="product">
                    <div class="col-md-4">
                        <div class="card px-2 py-2">
                            <img :src="product.image" :alt="product.title" class="img-fluid card-img-top" preview />
                        </div>
                    </div>
                    <div class=" col">
                        <div class="card px-4 py-4 product_info">
                            <h1>{{ product.title }}</h1>
                            <p><strong>Precio:</strong> ${{ product.price }} USD</p>
                            <p><strong>Categoría:</strong> {{ product.category }}</p>
                            <p><strong>Descripción:</strong> {{ product.description }}</p>
                            <p><strong>Calificación:</strong> {{ product.rating.rate }} ({{ product.rating.count }} votos)
                            </p>

                            <div class="col">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary" type="button" @click="handleAddToCart(product)">
                                        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                                        Agregar al carrito</button>
                                </div>
                            </div>
                        </div>
                        <p> <br /><br /></p>
                    </div>
                </div>

            </div>
        </template>
    </LayoutTemplate>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import LayoutTemplate from "../components/common/LayoutTemplateSimple.vue";
import BreadcrumbComponent from "../components/common/BreadCrumb.vue";
import { useRoute } from 'vue-router';
import axios from 'axios';
import { useStore } from 'vuex';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export default {
    components: {
        LayoutTemplate,
        BreadcrumbComponent
    },
    setup() {
        const route = useRoute();
        const productId = ref(route.params.id);
        const product = ref(null);
        const breadcrumbItems = ref([]);
        const store = useStore();
        const $toast = useToast();

        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${productId.value}`);
                product.value = response.data;

                breadcrumbItems.value.push({ title: "Inicio", url: "/" });

                if (product.value) {
                    breadcrumbItems.value.push(
                        { title: product.value.category, url: `/categories/${product.value.category}` },
                        { title: "Detalle del producto", url: "#" }
                    );
                }

            } catch (error) {
                console.error('Error al cargar los productos:', error);
            }
        };

        const handleAddToCart = (product) => {
            store.dispatch('cart/addToCart', product);
            let instance = $toast.success(product.title + " agregado al carrito!");
        };

        onMounted(() => {
            fetchProductDetails();
        });

        return {
            productId,
            product,
            breadcrumbItems,
            handleAddToCart
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

.product_info {
    padding: 10px;

    h1 {
        font-size: 20px;
        color: #094B6E;
        font-weight: bold;
        padding-bottom: 25px;
    }

    p {
        text-align: left;
    }
}
</style>