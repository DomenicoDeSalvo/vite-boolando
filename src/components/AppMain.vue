<script>
import card from './AppCard.vue';
import { store } from '../store.js';
export default{
    components:{
        card
    },

    data(){
        return{
            store: store
        }
    }

}

</script>

<template>

    <main class="main__section">
        <div class="container">
            <div class="row">
                <div v-for="item in store.products" :key="item.id" class="col-4">
                    <card :product="item"/>
                </div>
            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>
    .main__section{
        padding: 100px 0 20px;
    }
</style>