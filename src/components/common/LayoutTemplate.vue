<script setup>
import MasterTemplate from "./MasterTemplate.vue";
</script>

<template>
    <MasterTemplate>

        <template v-slot:maincontent-slot>
            <div class="d-flex flex-row template_layout" style="height: 100vh;">
                <div class="d-flex flex-column flex-shrink-0 p-3 bgsidemenu px-0" style="width: 250px;">
                    <slot name="menu-slot">
                    </slot>
                </div>
                <div class="flex-grow-1 bg-white p-4">
                    <slot name="content-slot">
                    </slot>
                </div>
            </div>
        </template>

    </MasterTemplate>
</template>
  
<style scoped></style>





