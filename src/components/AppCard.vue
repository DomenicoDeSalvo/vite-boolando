<script>
export default {
    props:['product'],

    methods: {
        favourite(product){
            product.isInFavorites = !product.isInFavorites
        }
    }

}

</script>

<template>
    <div class="card">
        <div class="card__header">
            <img :src="`/${product.frontImage}`" alt="">
            <div class="badge">
                <li v-for="(badge , i) in product.badges" :key="i" :class="`${badge.type}`">{{ badge.value }}</li>
            </div>
            <div @click="favourite(product)" :class="product.isInFavorites === true ? 'favourite':''" class="heart">&hearts;</div>
            <div class="overlay">
                <img :src="`/${product.backImage}`" alt="">
            </div>
        </div>
        <div class="card__body">
            <div class="brand">{{ product.brand }}</div>
            <h5>{{product.name}}</h5>
            <div class="price">{{product.price}}&euro;</div>
            <div class="old-price">29,99&euro;</div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

    .card__header{
        position: relative;
    }

    .brand{
        font-weight: 300;
        font-size: 12px;
    }
    .price{
        font-size: 12px;
        font-weight: 500;
        color: red;
        display: inline-block;
    }
    .old-price{
        display: inline-block;
        font-size: 12px;
        text-decoration: line-through;
    }

    .heart{
        position: absolute;
        z-index: 10;
        right: 0;
        top: 20px;
        font-size: 30px;
        background-color: white;
        padding: 4px 12px;
        cursor: pointer;
    }

    .favourite{
        color: red;
    }

    .heart:hover{
        color: red;
    }

    .card__header .overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    .card__header:hover .overlay{
        opacity: 1;
    }

    .badge{
        font-size: 12px;
        font-weight: 700;
        color: white;
        position: absolute;
        left: 0;
        bottom: 50px;
        z-index: 10;
        display: flex;
    }

    .discount{
        background-color: red;
        padding: 5px;
        order: -1;
    
    }

    .tag{
        background-color: green;
        padding: 5px;
    }

</style>