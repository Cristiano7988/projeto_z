<template>
  <div :class="['linha']">
    <Row
      v-for="(linha, index) in linhas"
      :key="index"
      :criarBoneco="(coluna.indice == boneco.posicao.coluna) && (linha.indice == boneco.posicao.linha)"
      :blocoId="[linha.id, coluna.id].join('-')"
      :boneco="boneco"
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
    }
  },
  components: {
    Row,
  }
};
</script>

<style scoped>
.linha.hidden {
  display: none;
}
</style>

