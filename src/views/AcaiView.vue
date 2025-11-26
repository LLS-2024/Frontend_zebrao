<script setup>
import AcaiCompo from '@/components/AcaiCompo.vue';
import { useRouter } from 'vue-router'; // Adicionado, embora não usado nas funções mostradas
// Importações de ref, onBeforeMount e axios não são necessárias aqui se este for apenas o componente de layout
// Mas AcaiCompo é importado corretamente.
</script>

<template>
    <main>
        <div class="cont1">
            <div>
                <div class="con1">
                    <p>Sabores do mundo</p>
                    <p>em forma <span>De Açaí</span></p>
                </div>
                <div class="con2">
                    <p>Sabores da felicidade</p>
                </div>
            </div>
            <div>
                <img src="/public/acai/image 384.png" alt="" />
            </div>
        </div>
        
        <div class="cont2">
            <div><p>Refresque seu dia e carregue suas energias com o sabor irresistível do açaí!</p></div>
            <div class="con3"> 
                <div class="img1"><img src="/public/acai/image 397.png" alt=""></div>
                <div class="img2"><img src="/public/acai/image 398.png" alt=""></div>
            </div>
        </div>

        <div class="cont3">
            <div><p>O açaí é rico em antioxidantes, que ajudam a combater os radicais livres e a prevenir o envelhecimento precoce e algumas doenças. Também é bom para a saúde do coração, já que possui gorduras boas que contribuem para o controle do colesterol. Outro ponto importante é que ele fornece bastante energia, sendo muito útil para quem pratica atividades físicas, pois ajuda na recuperação muscular e dá disposição.</p></div>
            <div><img src="/public/acai/image 399.png" alt=""></div>
        </div>

        <div class="cont4">
            <div><h2>Com ingredientes naturais</h2></div>
            <div class="deco"><img src="/public/acai/shape.png" alt=""></div>
            <div class="imgs">
                <div><img src="/public/acai/1.png" alt=""></div>
                <div><img src="/public/acai/28.png" alt=""></div>
                <div><img src="/public/acai/29.png" alt=""></div>
                <div><img src="/public/acai/30.png" alt=""></div>
                <div><img src="/public/acai/31.png" alt=""></div>
            </div>
        </div>
        
        <div class="cont5">
            <AcaiCompo/>
        </div>
    </main>
</template>

<style scoped>
/* =================================================== */
/* ESTILOS BASE (DESKTOP) */
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
    color: #6A148C;
}
.cont1 img {
    width: 650px;
    height: 400px;
}
.con2 p{
    color: #6A148C;
}
.cont2{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #E0D8E5;
    padding: 20px;
    text-align: center;
}
.cont2 p{
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    max-width: 400px;
}
.cont2 .img1 img,
.cont2 .img2 img {
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

/* Telas até 992px (Típico para a maioria dos tablets em paisagem) */
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

/* Telas até 768px (Típico para tablets em retrato e maioria dos celulares) */
@media (max-width: 768px) {
    /* 1. Contêiner 1: Título e Imagem */
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

    /* 2. Contêiner 2: Texto e Imagens */
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

    /* 3. Contêiner 3: Benefícios e Imagem */
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

    /* 4. Contêiner 4: Ingredientes */
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