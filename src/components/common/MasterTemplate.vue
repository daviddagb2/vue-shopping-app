<script setup>
import HeaderBarComponent from "./HeaderBarComponent.vue";
import AsideComponent from "./AsideComponent.vue";
</script>
<template>
    <div class="d-flex flex-column vh-100">
        <HeaderBarComponent />

        <div class="d-flex flex-grow-1 overflow-hidden">

            <div class="flex-grow-1 overflow-auto">
                <slot name="maincontent-slot">
                </slot>
            </div>
        </div>

    </div>
</template>

<style>
.vh-100 {
    height: 100vh;
}

.overflow-hidden {
    overflow: hidden;
}

.overflow-auto {
    overflow: auto;
}
</style>
