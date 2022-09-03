<template>
    <div :class="classes" class="field">
        <img class="imagem" v-if="classes.includes('carro') || classes.includes('carro-preto')" src="/img/carro.png" />
        <img
          class="imagem"
          v-if="
            classes.includes('carro-laranja') ||
            classes.includes('carro-azul') ||
            classes.includes('carro-verde')
          "
          src="/img/carro-colorido.png"
        />
        <img
          class="imagem fogo-grande"
          v-if="
            classes.includes('fogo')
          "
          src="/img/fogo.png"
        />
        <img
          class="imagem fogo-pequeno"
          v-if="
            classes.includes('fogo')
          "
          src="/img/fogo.png"
        />
        <div v-if="criarBoneco && boneco.vida" class="char">
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
            classes: []
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
                this.classes = objetos.methods.getObjetos(blocoId)
            }
        }
    }
}


</script>

<style>
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
        /* border: 1px solid black; */
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .char {
        position: absolute;
        border-radius: 50%;
        width: 30%;
        height: 30%;
        background: blue;
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
    }
    .fogo-grande, .fogo-pequeno {
        filter: blur(1px);
        animation-name: example;
        animation-iteration-count: infinite;
    }
    .imagem {
        width: 100%;
        transform: rotate(25deg);
    }
    .fogo .fogo-grande {
        transform: unset;        
        height: 70%;
        width: auto;
        position: absolute;
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
    .fogo .fogo-pequeno {
        transform: unset;        
        height: 40%;
        width: auto;
        position: absolute;
        top: 0;
        right: 0;
        animation-duration: 3s;
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