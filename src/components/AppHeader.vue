<script>
export default{
    data(){
        return{
            categories:[
                {
                    text:'Donna',
                    href:'#'
                },
                {
                    text:'Uomo',
                    href:'#'
                },
                {
                    text:'Bambini',
                    href:'#'
                },
            ],

            activities:[
                {
                    icon:'/user-24.png',
                    href:'#'
                },
                {
                    icon:'/heart-69-24.png',
                    href:'#'
                },
                {
                    icon:'/shopping-bag-24.png',
                    href:'#'
                },
            ]

        }
    }

}

</script>

<template>

    <header>
        <nav class="main__nav">
            <div class="container">
                <div class="row">
                    <ul class="nav__list">
                        <li v-for="(link, i) in categories" :key="i">{{ link.text }}</li>
                    </ul>
                    <a class="logo" href="">
                        <img src="/boolean-logo.png" alt="logo">
                    </a>
                    <ul class="nav__list">
                        <li v-for="(button, i) in activities" :key="i"><img :src="button.icon"></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

</template>

<style lang="scss" scoped>

    .main__nav{
        background-color: rgb(255, 105, 0);
        color: white;
        padding: 20px;
        position: fixed;
        z-index: 999;
        left: 0;
        width: 100%;
    }

    .logo{
        display: block;
        width: 100px;
    }

    .nav__list{
        display: flex;
        gap: 10px;

    }

    .nav__list img{
        width: 16px;
    }

    nav .row{
        justify-content: space-between;
        align-items: center;
        
    }

    .nav__list li{
        cursor: pointer;
    }

</style>