<template>
    <div :class="classes" class="field">
        <img
          class="imagem"
          v-for="(image, key) in images"
          :src="`/img/${image}.png`"
          :key="key"
        />
        <div v-if="criarBoneco && boneco.vida" :class="['character', boneco.posicao.parado, boneco.posicao.direcao]">
          <div v-if="boneco.hit" class="hit">-10</div>
          <div :style="'width: '+boneco.vida+'%'" :class="['barra']" ></div>
        </div>
        <!-- {{blocoId}} -->
    </div>
</template>

<script>
import objetos from "@/components/objetos.js";

export default {
    data() {
        return {
            classes: [],
            images: []
        }
    },
    methods: {
      verifica(array) {
        return this.classes.filter(classe => array.includes(classe)).length
      }
    },
    props: {
        criarBoneco: {
            type: Boolean,
            default: false
        },
        blocoId: {
            type: String,
            default: ''
        },
        boneco: {
            type: Object,
            default: {}
        }
    },
    watch: {
        blocoId: {
            immediate: true,
            handler (blocoId) {
                this.classes = objetos.methods.getObjetos(blocoId).filter(Boolean)

                const carro = this.verifica(['carro', 'carro-preto'])
                const carroColorido = this.verifica(['carro-laranja','carro-azul','carro-verde'])
                const fogo = this.verifica(['fogo'])
                const casa = this.verifica(['house l1 c1', 'house l1 c2', 'house l1 c3', 'house l2 c1', 'house l2 c2', 'house l2 c3', 'house l3 c1', 'house l3 c2', 'house l3 c3', 'house2 l1 c1', 'house2 l1 c2', 'house2 l1 c3', 'house2 l2 c1', 'house2 l2 c2', 'house2 l2 c3', 'house2 l3 c1', 'house2 l3 c2', 'house2 l3 c3'])
                
                this.images = []
                if (carro) this.images.push('carro')
                if (carroColorido) this.images.push('carro-colorido')
                if (fogo) this.images.push('fogo')
                if (casa) this.images.push('casa')
            }
        }
    }
}


</script>

<style>
    .field.house, .field.house2  {
        overflow: hidden;
    }
    .field.house img, .field.house2 img  {
        position: relative;
        z-index: 1;
        width: 350px;
    }

    .field.house.l1 img { bottom: -71px; }
    .field.house.l1.c3 img { left: -110px; }
    .field.house.l1.c2 img { left: -60px; }
    .field.house.l1.c1 img { left: -10px; }

    .field.house.l2 img { bottom: -120px; }
    .field.house.l2.c3 img { left: -110px; }    
    .field.house.l2.c2 img { left: -60px; }    
    .field.house.l2.c1 img { left: -10px; }

    .field.house.l3 img { bottom: -170px; }
    .field.house.l3.c3 img { left: -110px; }    
    .field.house.l3.c2 img { left: -60px; }    
    .field.house.l3.c1 img { left: -10px; }
    

    .field.house2.l1 img { bottom: 106px; }
    .field.house2.l1.c3 img { left: -110px; }
    .field.house2.l1.c2 img { left: -60px; }
    .field.house2.l1.c1 img { left: -10px; }
    
    .field.house2.l2 img { bottom: 50px; }
    .field.house2.l2.c3 img { left: -110px; }    
    .field.house2.l2.c2 img { left: -60px; }    
    .field.house2.l2.c1 img { left: -10px; }
    
    .field.house2.l3 img { bottom: 2px; }
    .field.house2.l3.c3 img { left: -110px; }    
    .field.house2.l3.c2 img { left: -60px; }    
    .field.house2.l3.c1 img { left: -10px; }

    .hit {
        position: absolute;
        top: -30px;
        font-weight: bold;
        color: #900;
    }
    .field {
        color: black;
        width: 100%;
        height: 100%;
        background: lightslategray;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .character.esquerda {background-position: 0px 180px;}
    .character.direita {background-position: 0px 120px;}
    .character.subindo { background-position: 0px 60px;}
    .character.descendo { background-position: 0px 0px; }
    .character.parado.esquerda {background-position: 135px 180px;}
    .character.parado.direita {background-position: 135px 120px;}
    .character.parado.subindo {background-position: 135px 60px;}
    .character.parado.descendo {background-position: 135px 0px;}

    .character.movendo.esquerda {
        animation-name: esquerda;
        animation-iteration-count: infinite;
        animation-duration: .45s;
        animation-timing-function: step-start;
    }
    @keyframes esquerda {
        0% { background-position: 0px 180px; }
        50% { background-position: 70px 180px; }
    }
    .character.movendo.direita {
        animation-name: direita;
        animation-iteration-count: infinite;
        animation-duration: .45s;
        animation-timing-function: step-start;
    }
    @keyframes direita {
        0% { background-position: 0px 120px; }
        50% { background-position: 70px 120px; }
    }
    .character.movendo.subindo {
        animation-name: subindo;
        animation-iteration-count: infinite;
        animation-duration: .45s;
        animation-timing-function: step-start;
    }
    @keyframes subindo {
        0% { background-position: 0px 60px; }
        50% { background-position: 70px 60px; }
    }
    .character.movendo.descendo {
        animation-name: descendo;
        animation-iteration-count: infinite;
        animation-duration: .45s;
        animation-timing-function: step-start;
    }
    @keyframes descendo {
        0% { background-position: 0px 0px; }
        50% { background-position: 70px 0px; }
    }
    .character {
        background-image: url("/img/character.png");
        background-size: 205px;
        position: absolute;
        filter: brightness(0.65);
        width: 50px;
        height: 50px;
    }
    .barra {
        position: absolute;
        top: -5px;
        width: 100%;
        height: 2px;
        background: lime;
    }
    .asfalto {
        background: #333;
        z-index: 3;
    }
    .imagem {
        width: 100%;
        position: absolute;
    }
    .fogo img {        
        box-shadow: inset 0px -33px 23px rgba(231, 107, 5, 0.3), 0px -5px 13px rgb(231 107 5 / .3);
        height: 70%;
        width: auto;
        animation-duration: 4s;
    }
    @keyframes example {
        0% {
            filter: blur(1px);
            transform: matrix(1, 0, 0, 1, 0, 0);
        }
        50% {
            filter: blur(2px);
            transform: matrix(.8, 0, 0, .99, .7, 0);
        }
        100% {
            filter: blur(1px);
            transform: matrix(1, 0, 0, 1, 0, 0);
        }
    }
    .carro img, .carro-azul img, .carro-laranja img, .carro-preto img, .carro-verde img {
        transform: rotate(25deg);
    }
    .carro-preto .imagem {
        filter: brightness(0.2);
    }
    .carro-azul .imagem {
        filter: hue-rotate(-190deg);
    }
    .carro-verde .imagem {
        filter: hue-rotate(45deg);
    }
</style>