import {defineStore} from 'pinia';
import Swal from 'sweetalert2'
export const productStore = defineStore('product',{
    state:() =>{ 
        return{
            products: [
                {
                    id: 1,
                    name: "Samsung Galaxy S20",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    image:
                        "https://dkstatics-public.digikala.com/digikala-products/2e16bad7f6ea176ae6502406d7342afe9982fbf7_1608030120.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                    price: 300,
                },
    
                {
                    id: 2,
                    name: "iPhone 12",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    image: "https://dkstatics-public.digikala.com/digikala-products/9f5d8f6583a7289a096a9180ac88708856f4bd8f_1607433653.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                    price: 500,
                },
    
                {
                    id: 3,
                    name: "Redmi Note 8",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    image:
                        "https://dkstatics-public.digikala.com/digikala-products/113846203.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                    price: 600,
                },
    
                {
                    id: 4,
                    name: "Samsung Galaxy A71",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    image:
                        "https://dkstatics-public.digikala.com/digikala-products/120415904.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                    price: 700,
                },
                {
                    id: 5,
                    name: "xiaomi Redmi Note 10",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    image:
                        "https://dkstatics-public.digikala.com/digikala-products/4fd57505f8871f90ba2165c78410caad711ecd8c_1656426267.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
                    price: 300,
                },
                    

                
            ]

        }

    },
    getters:{
        allProducts(state) {
        return state.products
    }

    },
    actions:{
        createProduct(np){
            const item = this.products.find(p => p.id == np.id)
            if(!item){
                this.products.unshift(np)
                Swal.fire({
                    title: "created!",
                    text: "crate new product successfully",
                    icon: "success",
                    confirmButtonText: "Ok",
                })
            }
           
        
       

        }
    

    }


})
