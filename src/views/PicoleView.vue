<script setup>
import PicoleCompo from '@/components/PicoleCompo.vue';

// Adicionado, embora não usado nas funções mostradas
// Importações de ref, onBeforeMount e axios não são necessárias aqui se este for apenas o componente de layout
</script>
<template>
    <main>
        <div class="cont1">
            <div>
                <div class="con1">
                    <p>Sabores do mundo</p>
                    <p>em forma <span>De Picolé</span></p>
                </div>
                <div class="con2">
                    <p>Sabores da felicidade</p>
                </div>
            </div>
            <div>
                <img src="/public/picole/image 390.png" alt="" />
            </div>
        </div>
        
        <div class="cont2">
            <div><p>"Nada combina melhor com um dia quente do que a refrescância deliciosa de um picolé. Além de matar a sede, ele traz aquele gostinho de alegria e leveza que transforma qualquer momento em pausa especial.</p></div>
            <div class="con3"> 
                <div class="img1"><img src="/public/picole/image 404.png" alt=""></div>
                <div class="img2"><img src="/public/picole/image 405.png" alt=""></div>
            </div>
        </div>

        <div class="cont3">
            <div><p>"Em meio à correria do dia a dia, existem pequenos prazeres capazes de transformar nossa rotina em momentos leves e cheios de sabor. Um desses prazeres é tomar um picolé. A cada mordida geladinha, o calor vai embora, o corpo se refresca e a mente encontra uma pausa merecida. Mais do que uma sobremesa, o picolé é um convite para voltar à infância, relembrar dias ensolarados, sorrisos espontâneos e aquela sensação boa de simplicidade."</p></div>
            <div><img src="/public/picole/image 404.png" alt=""></div>
        </div>

        <div class="cont4">
            <div><h2>Com ingredientes naturais</h2></div>
            <div class="deco"><img src="/public/picole/shape.png" alt=""></div>
            <div class="imgs">
                <div><img src="/public/picole/1.png" alt=""></div>
                <div><img src="/public/picole/28.png" alt=""></div>
                <div><img src="/public/picole/29.png" alt=""></div>
                <div><img src="/public/picole/30.png" alt=""></div>
                <div><img src="/public/picole/31.png" alt=""></div>
            </div>
        </div>
        
        <div class="cont5">
            <PicoleCompo/>
        </div>
    </main>
</template>

<style scoped>
/* =================================================== */
/* ESTILOS BASE (DESKTOP) - Manutenção da estética original */
/* =================================================== */
main {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.con2 p {
    font-weight: 300;
    color: #533931;
    font-size: 20px;
    font-family: 'Work Sans', sans-serif;
}
.cont1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.con1 p {
    font-size: 40px;
    color: #533931;
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    margin: 0px;
}
.con1 span {
    color: #DBC234; /* COR TEMA PICOLÉ */
}
.cont1 img {
    width: 650px;
    height: 400px;
}
.con2 p{
    color: #DBC234; /* COR TEMA PICOLÉ */
}
.cont2{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FFDEC5; /* COR DE FUNDO TEMA PICOLÉ */
    padding: 20px 100px;
    text-align: center;
}
.cont2 p{
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    max-width: 400px; /* Adicionado limite */
}
.cont2 .img1 img{
    width: 200px;
    height: 200px;
    margin-left: 50px;
}
.cont2 .img2 img{
    width: 200px;
    height: 200px;
    margin-left: 50px;
}
.con3{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.cont3{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 50px 200px;
    align-items: center;
}
.cont3 img{
    width: 400px;
    height: 400px;
}
.cont3 p{
    font-family: 'Work Sans', sans-serif;
    margin-right: 10px;
}
.cont4{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
}
.cont4 h2{
    font-family: 'Work Sans', sans-serif;
    font-size: 30px;
    font-weight: 600;
    color: black;
}
.cont4 .imgs{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
}
.cont4 .imgs img{
    width: 150px;
    height: 200px;
    padding: 20px;
}
.cont4 .deco img{
    width: 250px;
    height: 70px;
    padding: 20px;
}

/* =================================================== */
/* RESPONSIVIDADE (TABLET & MOBILE) */
/* =================================================== */

/* Telas até 992px (Tablets em Paisagem) */
@media (max-width: 992px) {
    .con1 p {
        font-size: 32px;
    }
    .con2 p {
        font-size: 18px;
    }
    .cont3 {
        padding: 30px; 
    }
    .cont3 p {
        font-size: 14px;
    }
}

/* Telas até 768px (Tablets em Retrato e Celulares Grandes) */
@media (max-width: 768px) {
    /* 1. Contêiner 1: Empilha título e imagem */
    .cont1 {
        flex-direction: column;
        text-align: center;
    }
    .cont1 img {
        width: 100%;
        max-width: 400px;
        height: auto;
        margin-top: 20px;
    }
    .con1 p {
        font-size: 30px;
    }

    /* 2. Contêiner 2: Empilha texto e imagens */
    .cont2 {
        flex-direction: column;
        padding: 20px 10px;
    }
    .cont2 p {
        font-size: 16px;
        margin-bottom: 20px;
        max-width: 90%; 
    }
    .cont2 .img1 img,
    .cont2 .img2 img {
        width: 150px;
        height: 150px;
        margin-left: 20px;
    }
    .con3 {
        justify-content: center;
    }

    /* 3. Contêiner 3: Empilha texto e imagem */
    .cont3 {
        flex-direction: column;
        text-align: center;
        padding: 20px;
    }
    .cont3 p {
        margin-right: 0;
        margin-bottom: 20px;
    }
    .cont3 img {
        width: 100%;
        max-width: 300px;
        height: auto;
    }

    /* 4. Contêiner 4: Ajusta tamanho dos ícones */
    .cont4 h2 {
        font-size: 24px;
    }
    .cont4 .imgs img {
        width: 100px;
        height: 150px;
        padding: 10px;
    }
}

/* Telas até 480px (Celulares menores) */
@media (max-width: 480px) {
    .con1 p {
        font-size: 24px;
    }
    .cont2 .img1 img,
    .cont2 .img2 img {
        width: 120px;
        height: 120px;
        margin-left: 10px;
    }
    .cont4 .deco img {
        width: 200px;
        height: auto;
    }
}
</style>