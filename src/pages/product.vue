<template>
   <div>
    <div class="container mt-5">
      <div class="row g-3">
        <div v-for="product in products" :key="product.id" class="col-md-3">
          <div class="card">
            <img class="card-img-top" :src="product.image" alt="" />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">
                {{ product.description }}
              </p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
              <button @click="addToCart(product)" class="btn btn-outline-success btn-sm">Add To Cart</button>
              <span>{{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {productStore} from '../store/product.js'
import {useCartStore} from '../store/cart.js'
  const cartStore = useCartStore(); 
  const myPoductstore=productStore();
  const products = computed(()=>myPoductstore.allProducts);
  function addToCart(product) {
    cartStore.addToCart(product)
   
  }
</script>

<style>

</style>