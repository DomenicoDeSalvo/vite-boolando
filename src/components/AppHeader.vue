<script>
export default{

}

</script>

<template>

    <header>
        <nav class="main__nav">
            <div class="container">
                <div class="row">
                    <ul class="nav__list">
                        <li><a href="">Donna</a></li>
                        <li><a href="">Uomo</a></li>
                        <li><a href="">Bambini</a></li>
                    </ul>
                    <a class="logo" href="">
                        <img src="/boolean-logo.png" alt="logo">
                    </a>
                    <ul class="nav__list">
                        <li><a href=""><img src="/user-24.png" alt="account"></a></li>
                        <li><a href=""><img src="/heart-69-24.png" alt="favourites"></a></li>
                        <li><a href=""><img src="/shopping-bag-24.png" alt="cart"></a></li>
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

</style>