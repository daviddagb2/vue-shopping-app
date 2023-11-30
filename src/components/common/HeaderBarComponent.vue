<template>
    <header class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
        <div class="container-fluid">

            <a class="navbar-brand  d-none d-md-block" href="#">

                <strong>Vue Shopping Store</strong>
            </a>

            <!-- Responsive offisde button -->
            <button class="navbar-brand btn btn-link d-block d-md-none" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#bdSidebar" aria-controls="bdSidebar">
                <font-awesome-icon :icon="['fas', 'bars']" class="iconNavheader" />
            </button>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="d-flex">

                <button class="btn " type="button">
                    <img src="/img/profilepic.jpg" class="rounded profileimg float-end" alt="Profile" />
                </button>
            </div>

        </div>
    </header>
</template>
  