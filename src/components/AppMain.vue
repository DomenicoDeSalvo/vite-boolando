<script>
export default{

}

</script>

<template>

    <main class="main__section">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="card">
                        <div class="card__header">
                            <img src="./img/1.webp" alt="immagine_1">
                            <div class="badge">
                                <span class="discount">-50%</span>
                                <span class="eco">Sostenibilità</span>
                            </div>
                            <div class="heart">&hearts;</div>
                            <div class="overlay">
                                <img src="./img/1b.webp" alt="immagine_1b">
                            </div>
                        </div>
                        <div class="card__body">
                            <div class="brand">Levi's</div>
                            <h5>RELAXED FIT TEE UNISEX</h5>
                            <div class="price">14,99&euro;</div>
                            <div class="old-price">29,99&euro;</div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card__header">
                            <img src="./img/2.webp" alt="immagine_2">
                            <div class="badge">
                                <span class="discount">-30%</span>
                            </div>
                            <div class="heart">&hearts;</div>
                            <div class="overlay">
                                <img src="./img/2b.webp" alt="immagine_2b">
                            </div>
                        </div>
                        <div class="card__body">
                            <div class="brand">Guess</div>
                            <h5>ROSES TEE</h5>
                            <div class="price">20,99&euro;</div>
                            <div class="old-price">29,99&euro;</div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card__header">
                            <img src="./img/3.webp" alt="immagine_3">
                            <div class="badge">
                                <span class="discount">-30%</span>
                            </div>
                            <div class="heart">&hearts;</div>
                            <div class="overlay">
                                <img src="./img/3b.webp" alt="immagine_3b">
                            </div>
                        </div>
                        <div class="card__body">
                            <div class="brand">Come Zucchero Filato</div>
                            <h5>VOGLIA DI COLORI PASTELLO</h5>
                            <div class="price">129,99&euro;</div>
                            <div class="old-price">184,99&euro;</div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card__header">
                            <img src="./img/4.webp" alt="immagine_4">
                            <div class="badge">
                                <span class="discount">-50%</span>
                                <span class="eco">Sostenibilità</span>
                            </div>
                            <div class="heart">&hearts;</div>
                            <div class="overlay">
                                <img src="./img/4b.webp" alt="immagine_4b">
                            </div>
                        </div>
                        <div class="card__body">
                            <div class="brand">Levi's</div>
                            <h5>TEE UNISEX</h5>
                            <div class="price">14,99&euro;</div>
                            <div class="old-price">29,99&euro;</div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card__header">
                            <img src="./img/5.webp" alt="immagine_5">
                            <div class="heart">&hearts;</div>
                            <div class="overlay">
                                <img src="./img/5b.webp" alt="immagine5b">
                            </div>
                        </div>
                        <div class="card__body">
                            <div class="brand">Maya Deluxe</div>
                            <h5>STRIPE BODICE</h5>
                            <div class="price">99,99&euro;</div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card__header">
                            <img src="./img/6.webp" alt="immagine_6">
                            <div class="badge">
                                <span class="eco">Sostenibilità</span>
                            </div>
                            <div class="heart">&hearts;</div>
                            <div class="overlay">
                                <img src="./img/6b.webp" alt="immagine_6b">
                            </div>
                        </div>
                        <div class="card__body">
                            <div class="brand">Esprit</div>
                            <h5>MAGLIONE BLACK</h5>
                            <div class="price">29,99&euro;</div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </main>

</template>

<style>
    .main__section{
        padding: 100px 0 20px;
    }

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

    .badge{
        font-size: 12px;
        font-weight: 700;
        color: white;
        position: absolute;
        left: 0;
        bottom: 50px;
        z-index: 10;
    }

    .discount{
        background-color: red;
        padding: 5px;
    
    }

    .eco{
        background-color: green;
        padding: 5px;
    }

    .heart{
        position: absolute;
        z-index: 10;
        right: 0;
        top: 20px;
        font-size: 30px;
        background-color: white;
        padding: 4px 12px;
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
</style>