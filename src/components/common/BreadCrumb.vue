<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb customlinks">
            <li class="breadcrumb-item" v-for="(item, index) in items" :key="index">

                <router-link :to="item.url" v-if="item.url">{{ item.title }}</router-link>
                <span v-else>{{ item.title }}</span>
            </li>
        </ol>
    </nav>
</template>
  
<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
            default: () => [],
        },
    },
};
</script>
  
<style scoped>
.customlinks {
    padding-bottom: 15px;
    padding-top: 10px;
}
</style>
  