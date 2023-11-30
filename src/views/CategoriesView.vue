<template>
    <LayoutTemplate>
        <template v-slot:content-slot>
            <div class="container" style="max-width: 800px;">
                <div class="row" v-if="product">
                    <div class="col">
                        <h1>Lista de Categorias</h1>

                        <BreadcrumbComponent :items="breadcrumbItems" />


                    </div>
                </div>

                <div class="row" v-if="product">

                    <div class="col">
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button">Regresar</button>
                        </div>
                    </div>

                    <div class="col">
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button">Agregar al carrito</button>
                        </div>
                    </div>

                </div>
            </div>
        </template>
    </LayoutTemplate>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import LayoutTemplate from "../components/common/LayoutTemplateSimple.vue";
import axios from 'axios';

export default {
    components: {
        LayoutTemplate,
    },
    setup() {
        const productId = ref(null);
        const product = ref(null);

        const breadcrumbItems = [
            { title: "Home", url: "#" },
            { title: "Library", url: "#" },
            { title: "Data", url: "#" },
        ];

        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${productId.value}`);
                product.value = response.data;
                console.log(response.data);
            } catch (error) {
                console.error('Error al cargar los productos:', error);
            }
        };

        onMounted(() => {
            productId.value = 1;
            fetchProductDetails();
        });

        return {
            productId,
            product,
            breadcrumbItems
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