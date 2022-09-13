<template>
    <div :class="classes" class="field">
        <img
          class="imagem"
          v-for="(image, key) in images"
          :src="`/img/${image}.png`"
          :image="image"
          :key="key"
        />
        <div v-if="criarInimigo && inimigo?.vida" :class="['elen', inimigo.posicao.parado, inimigo.posicao.direcao, inimigo.hit && 'hit']">
          <div v-if="inimigo.hit" class="hit">-10</div>
          <div :class="['barra']" >
            <div :style="'width: '+inimigo.vida+'%'" class="amount"></div>
          </div>
        </div>
        <div v-if="criarBoneco && boneco.vida" :class="['charlie', boneco.posicao.parado, boneco.posicao.direcao, boneco.hit && 'hit']">
          <div v-if="boneco.hit" class="points">-10</div>
          <div :class="['barra']" >
            <div :style="'width: '+boneco.vida+'%'" class="amount"></div>
          </div>
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
        criarInimigo: {
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
        },
        inimigo: {
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