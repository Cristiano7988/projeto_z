<template>
  <div :class="['linha']">
    <Row
      v-for="(linha, index) in linhas"
      :key="index"
      :criarBoneco="(coluna.indice == boneco.posicao.coluna) && (linha.indice == boneco.posicao.linha)"
      :blocoId="[linha.id, coluna.id].join('-')"
      :boneco="boneco"
      :criarInimigo="(coluna.indice == inimigo.posicao.coluna) && (linha.indice == inimigo.posicao.linha)"
      :inimigo="inimigo"
      :tiro="dispara(boneco.dispara, boneco.posicao.linha, boneco.posicao.coluna + 1, [linha.id, coluna.id].join('-'))"
    />
  </div>
</template>

<script>
import Row from "@/components/Row.vue";

export default {
  props: {
    linhas: {
      type: Array,
      default: []
    },
    coluna: {
      type: Object,
      default: {}
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
  components: {
    Row,
  },
  methods: {
    dispara(dispara, linha, coluna, idBlocoAtual) {
      const idBlocoSeguinte = ['l' + linha, 'c' + coluna].join('-');
      const detecta = dispara.pistola && (idBlocoAtual === idBlocoSeguinte)
      return detecta
    }
  }
};
</script>

<style scoped>
.linha.hidden {
  display: none;
}
</style>

