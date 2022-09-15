<template>
  <div
    :style="`
      display: grid;
      grid-template-columns: repeat(${tela.colunas.total - tela.colunas.inicio}, 50px);
      grid-template-rows: repeat(${tela.linhas.total - tela.linhas.inicio}, 50px);
      position: relative`
    "
  >
      <div v-if="bloqueado" class="alerta">Não há caminho por aí!</div>
      <div v-if="!boneco.vida" class="alerta">Você Morreu!</div>
      <Column
        v-for="(coluna, index) in colunas"
        :key="index"
        :coluna="coluna"
        :linhas="linhas"
        :boneco="boneco"
        :inimigo="inimigo"
      />
  </div>
</template>

<script>
import Column from "@/components/Column.vue";
import objetos from "@/components/objetos.js";

// CONFIGURAÇÕES:

// PERSONAGEM ---------
const boneco = {
  hit: false,
  vida: 100,
  oxigenio: 100,
  dispara: {
    pistola: false
  },
  posicao: {
    coluna: 4,
    linha: 11,
    direcao: 'direita',
    parado: 'parado'
  }
}

const inimigo = {
  hit: false,
  vida: 100,
  posicao: {
      linha: 9,
      coluna: 17,
      parado: 'parado',
      direcao: 'descendo'
    }
}

// TELA ----------------
const tela = {
  colunas: {
    inicio: 0,
    total: 28
  },
  linhas: {
    inicio: 6,
    total: 22
  }
}

// MAPA ------------------
const mapa = {
  colunas: {
    id: 'c',
    inicio: 0,
    total: 50
  },
  linhas: {
    id: 'l',
    inicio: 0,
    total: 25
  }
}

const criaMapa = ({ total, id }) => {
  let mapa = [];

  for (var indice = 0; indice <= total; indice++) {  
    mapa[indice] = {
      indice,
      id: id+indice,
    }
  }

  return mapa
}

const delimitaMapa = (mapa, {inicio, total}) => mapa
  .slice(inicio, total)
  .map((item) => item);


const linhas = criaMapa(mapa.linhas);
const colunas = criaMapa(mapa.colunas);

// ------------------------------------ //

export default {
  data() {
    return {
      bloqueado: false,
      linhas: delimitaMapa(linhas, tela.linhas),
      colunas: delimitaMapa(colunas, tela.colunas),
      tela,
      mapa,
      boneco,
      inimigo,
      trava: false
    };
  },
  components: { Column },
  methods: {
    checaPosicao(blocoId, personagem) {
      const [l, c] = blocoId
      const {linha, coluna} = personagem.posicao
      const mesmoBloco = coluna == c.replace('c', '') && linha == l.replace('l', '')

      return (mesmoBloco && personagem.vida)
    },

    causarDano(personagem) {
      const {vida} = personagem
      if (!vida) return
  
      personagem.hit = true
      personagem.vida = vida - 10;
        
      return personagem
    },
    bloqueiaMovimento(preservaPosicao) {
      this.bloqueado = true;
      setTimeout(()=> this.bloqueado = false, 1000)
  
      return preservaPosicao
    },
    DeslocaMapa(mapa, direcao, limiteDoMapa) {
      const novoMapa = mapa
        .slice(direcao, direcao + limiteDoMapa)
        .map( (bloco) =>  bloco)

      return novoMapa
    },
    movimentar(direcao, posicaoBlocoSeguinte, limiteDoMapa, mapa, preservaPosicao) {
      // Impede de mover o mapa e o boneco
      if (!this.boneco.vida) return preservaPosicao
      if (mapa[posicaoBlocoSeguinte] == undefined) return this.bloqueiaMovimento(preservaPosicao)

      const { id } = mapa[0];
      let novaPosicao = /c/.test(id)
        ? this.boneco.posicao.coluna + direcao
        : this.boneco.posicao.linha + direcao

      const blocoId = /c/.test(id)
        ? [linhas[this.boneco.posicao.linha].id, mapa[novaPosicao].id]
        : [ mapa[novaPosicao].id, colunas[this.boneco.posicao.coluna].id]

      const obstaculo = objetos
        .methods
        .getObjetos(blocoId.join('-'))
        .filter(Boolean)
        .filter(item => !['asfalto', 'fogo'].includes(item))
        .length

      if (obstaculo) return this.bloqueiaMovimento(preservaPosicao)

      const hit = objetos
        .methods
        .getObjetos(blocoId.join('-'))
        .filter(Boolean)
        .filter(item => item == 'fogo')
        .length

      if (hit) {
        const danificaBoneco = () => {
          this.boneco = this.causarDano(this.boneco)
          setTimeout(()=> this.boneco.hit = false, 1000)
        }

        const checaRepetidamente = () => {
          setTimeout(()=> {
            const permanece = this.checaPosicao(blocoId, this.boneco)
  
            if (permanece) {
              danificaBoneco()
              checaRepetidamente()
            }
          }, 4000)
        }

        danificaBoneco()
        checaRepetidamente()
      }

      // Move o boneco
      if (/c/.test(id)) this.boneco.posicao.coluna = novaPosicao
      else this.boneco.posicao.linha = novaPosicao
      
      // Desloca o mapa
      let mapaNovo = this.DeslocaMapa(mapa, posicaoBlocoSeguinte, limiteDoMapa)
  
      return mapaNovo;
    }
  },
  mounted () {
    const conduzAte = (linha1, coluna1, linha2, coluna2 ) => {
      return (
        (linha1 + 1 == linha2 && coluna1 == coluna2) || 
        (linha1 == linha2 && coluna1 + 1 == coluna2) || 
        (linha1 - 1 == linha2 && coluna1 == coluna2) || 
        (linha1 == linha2 && coluna1 - 1 == coluna2)
      )
    }
    setInterval(()=> {
      const {linha, coluna} = this.inimigo.posicao

      if(!this.inimigo.vida) return

      const movendo = conduzAte(linha, coluna, this.boneco.posicao.linha, this.boneco.posicao.coluna)
      
      this.inimigo.posicao.parado = movendo ? 'movendo' : 'parado'

      if (linha > this.boneco.posicao.linha && !movendo) {
        this.inimigo.posicao.linha = linha - 1;
        this.inimigo.posicao.direcao = 'subindo';
      }
      else if (linha < this.boneco.posicao.linha && !movendo) {
        this.inimigo.posicao.linha = linha + 1;
        this.inimigo.posicao.direcao = 'descendo';
      }
      
      else if (coluna > this.boneco.posicao.coluna && !movendo) {
        this.inimigo.posicao.coluna = coluna - 1;
        this.inimigo.posicao.direcao = 'esquerda';
      }
      else if (coluna < this.boneco.posicao.coluna && !movendo) {
        this.inimigo.posicao.coluna = coluna + 1;
        this.inimigo.posicao.direcao = 'direita';
      }
      
      const blocoId = ['l'+this.inimigo.posicao.linha, 'c'+this.inimigo.posicao.coluna].join('-');

      const hit = objetos
        .methods
        .getObjetos(blocoId)
        .filter(Boolean)
        .filter(item => item == 'fogo')
        .length
      
      if (hit) {
        this.inimigo = this.causarDano(this.inimigo)
      } else {
        this.inimigo.hit = false
      }
    }, 1000)
    document.onkeyup = (e) => {
      if ( (e.keyCode === 68) || (e.keyCode === 65) || (e.keyCode === 87) || (e.keyCode === 83)) this.boneco.posicao.parado = 'parado'
      if (e.keyCode === 32) setTimeout(() => this.boneco.dispara.pistola = false, 1200) 
    }
    document.onkeypress = (e) => {
      // Avança ou recua 1 bloco
      const blocos = (e.keyCode === 97) || (e.keyCode === 119)
        ? -1
        : 1;

      if ( (e.keyCode === 97) || (e.keyCode === 100) || (e.keyCode === 119) || (e.keyCode === 115)) this.boneco.posicao.parado = 'movendo'
      if(e.keyCode === 97) this.boneco.posicao.direcao = 'esquerda'
      if(e.keyCode === 100) this.boneco.posicao.direcao = 'direita'
      if(e.keyCode === 119) this.boneco.posicao.direcao = 'subindo'
      if(e.keyCode === 115) this.boneco.posicao.direcao = 'descendo'
      
      if(e.keyCode === 32) this.boneco.dispara.pistola = true

      if(!this.trava) {
        // P/ Esquerda ou P/ Direita
        if ((e.keyCode === 97) || (e.keyCode === 100)) this.colunas = this.movimentar(blocos, this.colunas[0].indice + blocos, tela.colunas.total, colunas, this.colunas);
        // P/ Cima ou P/ Baixo
        if ((e.keyCode === 119) || (e.keyCode === 115)) this.linhas = this.movimentar(blocos, this.linhas[0].indice + blocos, tela.linhas.total, linhas, this.linhas);
        
        setTimeout(()=> this.trava = false, 200)
        this.trava = true
      }
    }
  }
}
</script>

<style>
body {
  margin: unset;
  overflow: hidden;
}
.alerta {
  display: flex;
  position: absolute;
  z-index: 4;
  top: 50%;
  width: 100%;
  justify-content: center;
  opacity: .6;
  background: black;
  color: white;
  padding: 10px 0;
}
</style>