<script setup>
import ButtonAside from "../buttons/ButtonAside.vue";
</script>

<template>
    <aside class="bd-sidebar">

        <div class="offcanvas-lg offcanvas-start" tabindex="-1" id="bdSidebar" aria-labelledby="bdSidebarOffcanvasLabel">
            <div class="sidebar ">
                <nav class="nav flex-column">

                    <ButtonAside :icon="'house'" :variant="'fas'" :title="'Home'" :route="'/'" />

                    <ButtonAside :icon="'cart-shopping'" :variant="'fas'" :title="'Carrito'" :route="'/cart'" />

                </nav>
            </div>
        </div>
    </aside>
</template>

