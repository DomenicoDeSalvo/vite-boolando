<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from 'axios';
import { store } from './store.js';
export default{
  components:{
    AppHeader,
    AppMain,
    AppFooter,
  },

  methods: {
    addProducts(){
      axios.get('http://localhost:3000/products').then((res) => {
      store.products = res.data
      })
    }
  },

  created(){
    this.addProducts()
  }

}

</script>

<template>
  <AppHeader/>
  <AppMain/>
  <AppFooter/>
</template>

<style lang="scss">

@use './style/general';

</style>
