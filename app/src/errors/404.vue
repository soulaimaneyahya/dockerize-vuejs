<template>
    <div class="d-flex align-items-center justify-content-center vh-100">
        <h1 class="display-1 fw-bold">404</h1>
        <div class="mx-3">
            <h4>Not Found</h4>
            <p>URL "{{ $route.params.url || $route.params.id }}" Not Found</p>
            <a href="#" @click="$router.go(-1)" class="my-0 btn btn-dark btn-sm">Back Wher i was</a>
        </div>
    </div>
</template>