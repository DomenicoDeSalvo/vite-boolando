<script>
export default{

}

</script>

<template>

    <footer class="page__footer">
        <div class="container">
            <div class="row">
                <div>
                    <h4>Boolando s.r.l</h4>
                    <ul class="footer__list">
                        <li><a href="">Informazioni legali</a></li>
                        <li><a href="">Informativa sulla privacy</a></li>
                        <li><a href="">Diritto di recesso</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Trovaci anche su</h5>
                    <ul class="footer__list">
                        <li><a href=""><img src="/twitter-2-16.png" alt="twitter"></a></li>
                        <li><a href=""><img src="/facebook-3-16.png" alt="facebook"></a></li>
                        <li><a href=""><img src="/instagram-6-16.png" alt="instagram"></a></li>
                        <li><a href=""><img src="/pinterest-2-16.png" alt="pinterest"></a></li>
                        <li><a href=""><img src="/youtube-16.png" alt="youtube"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

</template>

<style lang="scss" scoped>
    .page__footer{
        background-color: black;
        color: white;
        padding: 20px 0;
    }

    footer .row{
        justify-content: space-between;
        align-items: center;    
    }

    .footer__list{
        display: flex;
        gap: 10px;
        font-size: 10px;
        padding-top: 6px;
    }

</style>