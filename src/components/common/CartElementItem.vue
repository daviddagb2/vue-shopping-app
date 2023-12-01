<template>
    <div class="d-flex justify-content-between align-items-center p-3 mb-2 cartitem">
        <div class="d-flex align-items-center">
            <img :src="image" class="img-fluid" alt="product" style="width: 50px; height: auto; margin-right: 15px;">
            <div>
                <h5>{{ title }}</h5>
                <p>{{ color }}</p>
            </div>
        </div>
        <div class="d-flex align-items-center">
            <input type="number" class="form-control" :value="localQuantity" @input="updateQuantity($event.target.value)"
                style="width: 60px; margin-right: 15px;">

            <span>${{ price }} c/u</span>
            <span class="ms-2">${{ totalPrice }} total</span>

            <button type="button" class="btn btn-danger btn-sm ms-3" @click="removeItem">
                <font-awesome-icon :icon="['fas', 'trash']" />
                {{ removeText }}</button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'CartItem',
    props: {
        image: String,
        title: String,
        color: String,
        quantity: {
            type: Number,
            default: 1
        },
        price: Number,
        removeText: {
            type: String,
            default: 'Eliminar'
        }
    },
    data() {
        return {
            localQuantity: this.quantity
        };
    },
    methods: {
        updateQuantity(value) {
            const numericValue = Number(value);
            if (!isNaN(numericValue)) {
                this.localQuantity = numericValue;
                this.$emit('update-quantity', numericValue);
            }
        },
        removeItem() {
            this.$emit('remove');
        }
    },
    computed: {
        totalPrice() {
            return this.localQuantity * this.price;
        },
    },
    watch: {
        quantity(newVal) {
            if (newVal !== this.localQuantity) {
                this.localQuantity = newVal;
            }
        }
    }
}
</script>
  
<style lang="scss" scoped>
.cartitem {
    border: 1px solid #dddddd;
    border-radius: 10px;
    margin-bottom: 10px !important;

    h5 {
        font-size: 18px;
    }
}
</style>