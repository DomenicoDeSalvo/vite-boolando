import {reactive} from 'vue'
import dataProducts from './assets/db.json';

export const store = reactive({
    products: dataProducts.products
})
