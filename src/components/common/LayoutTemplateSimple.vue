<script setup>
import MasterTemplate from "./MasterTemplate.vue";
</script>

<template>
    <MasterTemplate>
        <template v-slot:maincontent-slot>
            <div class="d-flex flex-row template_layout" style="height: 100vh;">
                <div class="flex-grow-1 bg-white p-4">
                    <slot name="content-slot">
                    </slot>
                </div>
            </div>
        </template>
    </MasterTemplate>
</template>
  
<style scoped></style>

