<template>
  <div class="row g-3" >
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">id</label>
    <input type="text" class="form-control" v-model="newproduct.id" >
  </div>
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label"> name</label>
    <input type="text" class="form-control" v-model="newproduct.name" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">description</label>
    <input type="text" class="form-control" v-model="newproduct.description" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">image</label>
    <input type="text" class="form-control" v-model="newproduct.image" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">price</label>
    <input type="text" class="form-control" v-model="newproduct.price" required>
  </div>
  
  <div class="col-12">
    <button class="btn btn-primary" @click="createProduct(newproduct)" >create</button>
  </div>
</div>
</template>

<script setup>
 import { reactive } from 'vue'
import {productStore} from '../store/product.js'
 const store =  productStore()
 const newproduct = reactive({
  id:"",
  name:"",
  description:"",
  image:"",
  price:"",


 });
 function createProduct(newproduct){
 store.createProduct(newproduct)
 } 
</script>

<style>

</style>