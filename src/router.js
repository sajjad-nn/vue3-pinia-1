import {createWebHistory,createRouter} from  'vue-router'
import home from './pages/home.vue'
import products from './pages/product.vue'
import cartIndex from './pages/cart.vue'
import createProduct from './pages/create.vue'
const routes = [
    {name:'home',path:'/',component:home},
    {name:'products',path:'/products',component:products},
    {name:'cart',path:'/cart',component:cartIndex},
    {name:'create',path:'/createProduct',component:createProduct}

];

const router = createRouter({
 history:createWebHistory(),
 routes
});
export default router;