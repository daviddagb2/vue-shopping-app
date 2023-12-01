<template>
    <DataTable :value="products">
        <PrimeColumn header="Imagen">
            <template #body="slotProps">
                <ImagePrime :src="slotProps.data.image" alt="Image" width="80" preview />
            </template>
        </PrimeColumn>

        <PrimeColumn header="Nombre" style="max-width: 240px;">
            <template #body="slotProps">
                <router-link class="productlinkbold" :to="`/product/${slotProps.data.id}`">{{ slotProps.data.title
                }}</router-link>
            </template>
        </PrimeColumn>

        <PrimeColumn field="category" header="Categoría"></PrimeColumn>
        <PrimeColumn field="price" header="Precio"></PrimeColumn>

        <PrimeColumn header="Acciones">
            <template #body="rowData">
                <div class="d-grid gap-2">
                    <button @click="emitViewDetail(rowData.data)" class="btn btn-purple btn-rounded btn-sm">
                        <font-awesome-icon :icon="['fas', 'eye']" />
                        Ver detalles
                    </button>
                </div>
                <div class="d-grid gap-2">
                    <button @click="emitAddToCart(rowData.data)" class="btn btn-primary btn-rounded btn-sm">
                        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                        Agregar al carrito
                    </button>
                </div>
            </template>
        </PrimeColumn>
    </DataTable>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import PrimeColumn from 'primevue/column';
import DataTable from 'primevue/datatable';

defineProps({
    products: Array
});

const emit = defineEmits(['viewDetail', 'addToCart']);

const emitViewDetail = (product) => {
    emit('viewDetail', product);
};

const emitAddToCart = (product) => {
    emit('addToCart', product);
};
</script>

<style lang="scss" scoped>
.productlinkbold {
    font-weight: 500;
    color: black;
    text-decoration: none;
    font-size: 14px;
}
</style>