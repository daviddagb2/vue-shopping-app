<template>
    <RouterLink :to="route" :class="'nav-link active asideitemlink'">
        <font-awesome-icon :icon="[variant, icon]" class="iconAside" />
        <p>{{ title }}</p>
    </RouterLink>
</template>


<script>
import { onMounted } from "vue";

export default {
    props: {
        icon: String,
        route: String,
        variant: String,
        title: String,
    },
    setup() {
        onMounted(() => {
        });
    },
};
</script>

<style lang="scss" scoped>
a.asideitemlink {
    font-size: 32px;
    min-width: 100px;
    padding: 0;
    color: white;

    svg {
        width: 32px;
        height: 32px;
    }

    p {
        font-size: 13px;
        margin: 0;
        padding: 0;
    }
}

@media (max-width: 767px) {
    a.asideitemlink {

        color: #0a4a6f;
    }
}
</style>
