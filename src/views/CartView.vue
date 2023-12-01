<template>
    <LayoutTemplate>
        <template v-slot:content-slot>
            <div class="container checkoutsection">

                <BreadcrumbComponent :items="breadcrumbItems" />

                <div class="row">

                    <div class=" col">
                        <router-link to="/" class="backbutton">
                            <p> <font-awesome-icon :icon="['fas', 'arrow-left']" /> Proceso de compra</p>
                        </router-link>

                        <hr />

                        <p>Shopping cart</p>
                        <p>Tienes {{ cartItems.length }} elementos en el carrito</p>

                        <CartElementItem v-for="item in cartItems" :key="item.id" :image="item.image" :title="item.title"
                            :color="item.color" :quantity="item.quantity" :price="item.price"
                            @remove="handleRemove(item.id)" @update-quantity="updateQuantity(item.id, $event)" />
                    </div>



                    <div class="col-md-4">
                        <div class="card px-2 py-2 bg-light">
                            <h2>Detalles de la compra</h2>

                            <p><strong>Cantidad de productos:</strong> {{ cartItems.length }}</p>

                            <p><strong>Total:</strong> ${{ totalCartPrice }} USD</p>

                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="button" @click="handlePayment"
                                    :disabled="isPaymentButtonDisabled">
                                    <font-awesome-icon :icon="['fas', 'money-bill-1']" />
                                    Pagar</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </template>
    </LayoutTemplate>
</template>
  
<script>
import { ref, computed } from 'vue';
import LayoutTemplate from "../components/common/LayoutTemplateSimple.vue";
import BreadcrumbComponent from "../components/common/BreadCrumb.vue";
import CartElementItem from "../components/common/CartElementItem.vue";
import { useStore } from 'vuex';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export default {
    components: {
        LayoutTemplate,
        BreadcrumbComponent,
        CartElementItem
    },
    setup() {
        const searchTerm = ref('');
        const products = ref([]);
        const breadcrumbItems = ref([]);
        const store = useStore();
        const $toast = useToast();

        const createBreadCrumb = () => {
            breadcrumbItems.value = [];
            breadcrumbItems.value.push(
                { title: "Inicio", url: "/" },
                { title: "Carrito de compras", url: `/cart` },
            );
        };

        const cartItems = computed(() => store.getters['cart/getCartItems']);

        const totalCartPrice = computed(() => {
            return cartItems.value.reduce((total, item) => {
                return total + (item.price * item.quantity);
            }, 0);
        });

        const isPaymentButtonDisabled = computed(() => {
            return totalCartPrice.value <= 0;
        });


        const handleRemove = (productId) => {
            store.dispatch('cart/removeFromCart', productId);
        };

        const updateQuantity = (productId, newQuantity) => {
            store.dispatch('cart/updateQuantity', { productId, newQuantity });
        };

        const handlePayment = () => {
            if (window.confirm("¿Está seguro que desea finalizar esta compra?")) {
                store.dispatch('cart/clearCart');
                let instance = $toast.info(" Su compra ha finalizado con éxito");
            }
        };


        return {
            cartItems,
            breadcrumbItems,
            searchTerm,
            products,
            totalCartPrice,
            isPaymentButtonDisabled,
            handlePayment,
            handleRemove,
            updateQuantity,
        };
    },
};
</script>
  
<style lang="scss" scoped>
.checkoutsection {
    h3 {
        text-align: left;
        font-size: 16px;
    }

    h2 {
        font-size: 18px;
        font-weight: bold;
    }

    .backbutton {
        text-decoration: none;

        p {
            font-weight: bold;
            font-weight: bold;
            text-align: left;
            color: black;
        }

    }
}
</style>