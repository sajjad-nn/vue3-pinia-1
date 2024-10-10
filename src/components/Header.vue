<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">pinia-project</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/createProduct">create</router-link>
        </li>
        
      </ul>
      <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link p-1 me-3" to="/cart">
                <span class="badge rounded-pill bg-primary me-1">{{ UseCartCount }}</span>
                <i class="bi bi-basket-fill" style="font-size:23px"></i>
                <span class="badge rounded-pill bg-primary me-1">{{ allCounts }}</span>
            </router-link>
          </li>
        </ul>
    </div>
  </div>
</nav>

</template>

<script setup>
 import { computed } from 'vue';
import {useCartStore} from '../store/cart.js'
 const store = useCartStore();
 const UseCartCount = computed(() =>store.count)
 const allCounts = computed(()=>store.allItemsNumbers)
</script>


<style scoped>

</style>
