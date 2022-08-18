export default {
    methods: {
        getObjetos(blocoId) {
            return [
               'c0' == blocoId && 'pedra',
               'c50' == blocoId && 'pedra',
               'l25' == blocoId && 'pedra',

               'l0-c34' == blocoId && 'asfalto',
               'l0-c35' == blocoId && 'asfalto',
               'l0-c36' == blocoId && 'asfalto',

               'l1-c34' == blocoId && 'asfalto',
               'l2-c34' == blocoId && 'asfalto',
               'l3-c34' == blocoId && 'asfalto',

               'l1-c35' == blocoId && 'asfalto',
               'l2-c35' == blocoId && 'asfalto',
               'l3-c35' == blocoId && 'asfalto',

               'l1-c36' == blocoId && 'asfalto',
               'l2-c36' == blocoId && 'asfalto',
               'l3-c36' == blocoId && 'asfalto',

               'l4-c34' == blocoId && 'asfalto',
               'l5-c34' == blocoId && 'asfalto',
               'l6-c34' == blocoId && 'asfalto',

               'l4-c35' == blocoId && 'asfalto',
               'l5-c35' == blocoId && 'asfalto',
               'l6-c35' == blocoId && 'asfalto',

               'l4-c36' == blocoId && 'asfalto',
               'l5-c36' == blocoId && 'asfalto',
               'l6-c36' == blocoId && 'asfalto',

               'l7-c34' == blocoId && 'asfalto',
               'l8-c34' == blocoId && 'asfalto',
               'l9-c34' == blocoId && 'asfalto',

               'l7-c35' == blocoId && 'asfalto',
               'l8-c35' == blocoId && 'asfalto',
               'l9-c35' == blocoId && 'asfalto',

               'l7-c36' == blocoId && 'asfalto',
               'l8-c36' == blocoId && 'asfalto',
               'l9-c36' == blocoId && 'asfalto',

               'l10-c0' == blocoId && 'asfalto',
               'l11-c0' == blocoId && 'asfalto',
               'l12-c0' == blocoId && 'asfalto',
               
               'l10-c1' == blocoId && 'asfalto',
               'l11-c1' == blocoId && 'asfalto',
               'l12-c1' == blocoId && 'asfalto',
               
               'l10-c2' == blocoId && 'asfalto',
               'l10-c0' == blocoId && 'carro',
               'l10-c0' == blocoId && 'fogo',
               'l11-c0' == blocoId && 'carro-preto',
               'l11-c0' == blocoId && 'fogo',
               'l12-c0' == blocoId && 'carro-preto',
               'l12-c0' == blocoId && 'fogo',
               'l12-c9' == blocoId && 'carro-preto',
               'l12-c13' == blocoId && 'carro-laranja',
               'l10-c19' == blocoId && 'carro-azul',
               'l12-c10' == blocoId && 'carro',
               'l10-c21' == blocoId && 'carro-verde',
               'l12-c23' == blocoId && 'carro-preto',
               'l12-c26' == blocoId && 'carro-laranja',
               'l10-c29' == blocoId && 'carro-azul',
               'l12-c33' == blocoId && 'carro',
               'l12-c49' == blocoId && 'carro-verde',
               'l10-c47' == blocoId && 'carro',
               'l12-c39' == blocoId && 'carro-preto',
               'l12-c42' == blocoId && 'carro-laranja',
               'l10-c43' == blocoId && 'carro-azul',
               'l12-c44' == blocoId && 'carro',

               'l11-c2' == blocoId && 'asfalto',
               'l12-c2' == blocoId && 'asfalto',

               'l10-c3' == blocoId && 'asfalto',
               'l11-c3' == blocoId && 'asfalto',
               'l12-c3' == blocoId && 'asfalto',

               'l10-c4' == blocoId && 'asfalto',
               'l11-c4' == blocoId && 'asfalto',
               'l12-c4' == blocoId && 'asfalto',

               'l10-c5' == blocoId && 'asfalto',
               'l11-c5' == blocoId && 'asfalto',
               'l12-c5' == blocoId && 'asfalto',

               'l10-c6' == blocoId && 'asfalto',
               'l11-c6' == blocoId && 'asfalto',
               'l12-c6' == blocoId && 'asfalto',

               'l10-c7' == blocoId && 'asfalto',
               'l11-c7' == blocoId && 'asfalto',
               'l12-c7' == blocoId && 'asfalto',

               'l10-c8' == blocoId && 'asfalto',
               'l11-c8' == blocoId && 'asfalto',
               'l12-c8' == blocoId && 'asfalto',

               'l10-c9' == blocoId && 'asfalto',
               'l11-c9' == blocoId && 'asfalto',
               'l12-c9' == blocoId && 'asfalto',

               'l10-c10' == blocoId && 'asfalto',
               'l11-c10' == blocoId && 'asfalto',
               'l12-c10' == blocoId && 'asfalto',

               'l10-c11' == blocoId && 'asfalto',
               'l11-c11' == blocoId && 'asfalto',
               'l12-c11' == blocoId && 'asfalto',

               'l10-c12' == blocoId && 'asfalto',
               'l11-c12' == blocoId && 'asfalto',
               'l12-c12' == blocoId && 'asfalto',

               'l10-c13' == blocoId && 'asfalto',
               'l11-c13' == blocoId && 'asfalto',
               'l12-c13' == blocoId && 'asfalto',

               'l10-c14' == blocoId && 'asfalto',
               'l11-c14' == blocoId && 'asfalto',
               'l12-c14' == blocoId && 'asfalto',

               'l10-c15' == blocoId && 'asfalto',
               'l11-c15' == blocoId && 'asfalto',
               'l12-c15' == blocoId && 'asfalto',

               'l0-c16'  == blocoId && 'asfalto',
               'l0-c17'  == blocoId && 'asfalto',
               'l0-c18'  == blocoId && 'asfalto',

               'l1-c16'  == blocoId && 'asfalto',
               'l1-c17'  == blocoId && 'asfalto',
               'l1-c18'  == blocoId && 'asfalto',

               'l2-c16'  == blocoId && 'asfalto',
               'l2-c17'  == blocoId && 'asfalto',
               'l2-c18'  == blocoId && 'asfalto',

               'l3-c16'  == blocoId && 'asfalto',
               'l3-c17'  == blocoId && 'asfalto',
               'l3-c18'  == blocoId && 'asfalto',

               'l4-c16'  == blocoId && 'asfalto',
               'l4-c17'  == blocoId && 'asfalto',
               'l4-c18'  == blocoId && 'asfalto',

               'l5-c16'  == blocoId && 'asfalto',
               'l5-c17'  == blocoId && 'asfalto',
               'l5-c18'  == blocoId && 'asfalto',

               'l6-c16'  == blocoId && 'asfalto',
               'l6-c17'  == blocoId && 'asfalto',
               'l6-c18'  == blocoId && 'asfalto',

               'l7-c16'  == blocoId && 'asfalto',
               'l7-c17'  == blocoId && 'asfalto',
               'l7-c18'  == blocoId && 'asfalto',

               'l8-c16'  == blocoId && 'asfalto',
               'l8-c17'  == blocoId && 'asfalto',
               'l8-c18'  == blocoId && 'asfalto',

               'l9-c16'  == blocoId && 'asfalto',
               'l9-c17'  == blocoId && 'asfalto',
               'l9-c18'  == blocoId && 'asfalto',

               'l10-c16' == blocoId && 'asfalto',
               'l11-c16' == blocoId && 'asfalto',
               'l12-c16' == blocoId && 'asfalto',

               'l10-c17' == blocoId && 'asfalto',
               'l11-c17' == blocoId && 'asfalto',
               'l12-c17' == blocoId && 'asfalto',

               'l10-c18' == blocoId && 'asfalto',
               'l11-c18' == blocoId && 'asfalto',
               'l12-c18' == blocoId && 'asfalto',

               'l13-c16'  == blocoId && 'asfalto',
               'l13-c17'  == blocoId && 'asfalto',
               'l13-c18'  == blocoId && 'asfalto',

               'l13-c34'  == blocoId && 'asfalto',
               'l14-c34'  == blocoId && 'asfalto',
               'l15-c34'  == blocoId && 'asfalto',
               'l16-c34'  == blocoId && 'asfalto',
               'l17-c34'  == blocoId && 'asfalto',
               'l18-c34'  == blocoId && 'asfalto',

               'l13-c35'  == blocoId && 'asfalto',
               'l14-c35'  == blocoId && 'asfalto',
               'l15-c35'  == blocoId && 'asfalto',
               'l16-c35'  == blocoId && 'asfalto',
               'l17-c35'  == blocoId && 'asfalto',
               'l18-c35'  == blocoId && 'asfalto',

               'l13-c36'  == blocoId && 'asfalto',
               'l14-c36'  == blocoId && 'asfalto',
               'l15-c36'  == blocoId && 'asfalto',
               'l16-c36'  == blocoId && 'asfalto',
               'l17-c36'  == blocoId && 'asfalto',
               'l18-c36'  == blocoId && 'asfalto',

               'l19-c34'  == blocoId && 'asfalto',
               'l20-c34'  == blocoId && 'asfalto',
               'l21-c34'  == blocoId && 'asfalto',
               'l22-c34'  == blocoId && 'asfalto',
               'l23-c34'  == blocoId && 'asfalto',
               'l24-c34'  == blocoId && 'asfalto',

               'l19-c35'  == blocoId && 'asfalto',
               'l20-c35'  == blocoId && 'asfalto',
               'l21-c35'  == blocoId && 'asfalto',
               'l22-c35'  == blocoId && 'asfalto',
               'l23-c35'  == blocoId && 'asfalto',
               'l24-c35'  == blocoId && 'asfalto',

               'l19-c36'  == blocoId && 'asfalto',
               'l20-c36'  == blocoId && 'asfalto',
               'l21-c36'  == blocoId && 'asfalto',
               'l22-c36'  == blocoId && 'asfalto',
               'l23-c36'  == blocoId && 'asfalto',
               'l24-c36'  == blocoId && 'asfalto',

               'l25-c34'  == blocoId && 'asfalto',
               'l25-c35'  == blocoId && 'asfalto',
               'l25-c36'  == blocoId && 'asfalto',

               'l14-c16'  == blocoId && 'asfalto',
               'l14-c17'  == blocoId && 'asfalto',
               'l14-c18'  == blocoId && 'asfalto',

               'l15-c16'  == blocoId && 'asfalto',
               'l15-c17'  == blocoId && 'asfalto',
               'l15-c18'  == blocoId && 'asfalto',

               'l16-c16'  == blocoId && 'asfalto',
               'l16-c17'  == blocoId && 'asfalto',
               'l16-c18'  == blocoId && 'asfalto',

               'l17-c16'  == blocoId && 'asfalto',
               'l17-c17'  == blocoId && 'asfalto',
               'l17-c18'  == blocoId && 'asfalto',

               'l18-c16'  == blocoId && 'asfalto',
               'l18-c17'  == blocoId && 'asfalto',
               'l18-c18'  == blocoId && 'asfalto',

               'l19-c16'  == blocoId && 'asfalto',
               'l19-c17'  == blocoId && 'asfalto',
               'l19-c18'  == blocoId && 'asfalto',

               'l20-c16'  == blocoId && 'asfalto',
               'l20-c17'  == blocoId && 'asfalto',
               'l20-c18'  == blocoId && 'asfalto',

               'l21-c16'  == blocoId && 'asfalto',
               'l21-c17'  == blocoId && 'asfalto',
               'l21-c18'  == blocoId && 'asfalto',

               'l22-c16'  == blocoId && 'asfalto',
               'l22-c17'  == blocoId && 'asfalto',
               'l22-c18'  == blocoId && 'asfalto',

               'l23-c16'  == blocoId && 'asfalto',
               'l23-c17'  == blocoId && 'asfalto',
               'l23-c18'  == blocoId && 'asfalto',

               'l24-c16'  == blocoId && 'asfalto',
               'l24-c17'  == blocoId && 'asfalto',
               'l24-c18'  == blocoId && 'asfalto',

               'l25-c16'  == blocoId && 'asfalto',
               'l25-c17'  == blocoId && 'asfalto',
               'l25-c18'  == blocoId && 'asfalto',

               'l26-c16'  == blocoId && 'asfalto',
               'l26-c17'  == blocoId && 'asfalto',
               'l26-c18'  == blocoId && 'asfalto',

               'l27-c16'  == blocoId && 'asfalto',
               'l27-c17'  == blocoId && 'asfalto',
               'l27-c18'  == blocoId && 'asfalto',

               'l28-c16'  == blocoId && 'asfalto',
               'l28-c17'  == blocoId && 'asfalto',
               'l28-c18'  == blocoId && 'asfalto',

               'l29-c16'  == blocoId && 'asfalto',
               'l29-c17'  == blocoId && 'asfalto',
               'l29-c18'  == blocoId && 'asfalto',

               'l30-c16'  == blocoId && 'asfalto',
               'l30-c17'  == blocoId && 'asfalto',
               'l30-c18'  == blocoId && 'asfalto',

               'l31-c16'  == blocoId && 'asfalto',
               'l31-c17'  == blocoId && 'asfalto',
               'l31-c18'  == blocoId && 'asfalto',

               'l32-c16'  == blocoId && 'asfalto',
               'l32-c17'  == blocoId && 'asfalto',
               'l32-c18'  == blocoId && 'asfalto',

               'l33-c16'  == blocoId && 'asfalto',
               'l33-c17'  == blocoId && 'asfalto',
               'l33-c18'  == blocoId && 'asfalto',

               'l34-c16'  == blocoId && 'asfalto',
               'l34-c17'  == blocoId && 'asfalto',
               'l34-c18'  == blocoId && 'asfalto',

               'l35-c16'  == blocoId && 'asfalto',
               'l35-c17'  == blocoId && 'asfalto',
               'l35-c18'  == blocoId && 'asfalto',

               'l36-c16'  == blocoId && 'asfalto',
               'l36-c17'  == blocoId && 'asfalto',
               'l36-c18'  == blocoId && 'asfalto',

               'l37-c16'  == blocoId && 'asfalto',
               'l37-c17'  == blocoId && 'asfalto',
               'l37-c18'  == blocoId && 'asfalto',

               'l38-c16'  == blocoId && 'asfalto',
               'l38-c17'  == blocoId && 'asfalto',
               'l38-c18'  == blocoId && 'asfalto',

               'l39-c16'  == blocoId && 'asfalto',
               'l39-c17'  == blocoId && 'asfalto',
               'l39-c18'  == blocoId && 'asfalto',

               'l40-c16'  == blocoId && 'asfalto',
               'l40-c17'  == blocoId && 'asfalto',
               'l40-c18'  == blocoId && 'asfalto',

               'l41-c16'  == blocoId && 'asfalto',
               'l41-c17'  == blocoId && 'asfalto',
               'l41-c18'  == blocoId && 'asfalto',

               'l10-c19' == blocoId && 'asfalto',
               'l11-c19' == blocoId && 'asfalto',
               'l12-c19' == blocoId && 'asfalto',

               'l10-c20' == blocoId && 'asfalto',
               'l11-c20' == blocoId && 'asfalto',
               'l12-c20' == blocoId && 'asfalto',

               'l10-c21' == blocoId && 'asfalto',
               'l11-c21' == blocoId && 'asfalto',
               'l12-c21' == blocoId && 'asfalto',

               'l10-c22' == blocoId && 'asfalto',
               'l11-c22' == blocoId && 'asfalto',
               'l12-c22' == blocoId && 'asfalto',

               'l10-c23' == blocoId && 'asfalto',
               'l11-c23' == blocoId && 'asfalto',
               'l12-c23' == blocoId && 'asfalto',

               'l10-c24' == blocoId && 'asfalto',
               'l11-c24' == blocoId && 'asfalto',
               'l12-c24' == blocoId && 'asfalto',

               'l10-c25' == blocoId && 'asfalto',
               'l11-c25' == blocoId && 'asfalto',
               'l12-c25' == blocoId && 'asfalto',

               'l10-c26' == blocoId && 'asfalto',
               'l11-c26' == blocoId && 'asfalto',
               'l12-c26' == blocoId && 'asfalto',

               'l10-c27' == blocoId && 'asfalto',
               'l11-c27' == blocoId && 'asfalto',
               'l12-c27' == blocoId && 'asfalto',

               'l10-c28' == blocoId && 'asfalto',
               'l11-c28' == blocoId && 'asfalto',
               'l12-c28' == blocoId && 'asfalto',

               'l10-c29' == blocoId && 'asfalto',
               'l11-c29' == blocoId && 'asfalto',
               'l12-c29' == blocoId && 'asfalto',

               'l10-c30' == blocoId && 'asfalto',
               'l11-c30' == blocoId && 'asfalto',
               'l12-c30' == blocoId && 'asfalto',

               'l10-c31' == blocoId && 'asfalto',
               'l11-c31' == blocoId && 'asfalto',
               'l12-c31' == blocoId && 'asfalto',

               'l10-c32' == blocoId && 'asfalto',
               'l11-c32' == blocoId && 'asfalto',
               'l12-c32' == blocoId && 'asfalto',

               'l10-c33' == blocoId && 'asfalto',
               'l11-c33' == blocoId && 'asfalto',
               'l12-c33' == blocoId && 'asfalto',

               'l10-c34' == blocoId && 'asfalto',
               'l11-c34' == blocoId && 'asfalto',
               'l12-c34' == blocoId && 'asfalto',

               'l10-c35' == blocoId && 'asfalto',
               'l11-c35' == blocoId && 'asfalto',
               'l12-c35' == blocoId && 'asfalto',

               'l10-c36' == blocoId && 'asfalto',
               'l11-c36' == blocoId && 'asfalto',
               'l12-c36' == blocoId && 'asfalto',

               'l10-c37' == blocoId && 'asfalto',
               'l11-c37' == blocoId && 'asfalto',
               'l12-c37' == blocoId && 'asfalto',

               'l10-c38' == blocoId && 'asfalto',
               'l11-c38' == blocoId && 'asfalto',
               'l12-c38' == blocoId && 'asfalto',

               'l10-c39' == blocoId && 'asfalto',
               'l11-c39' == blocoId && 'asfalto',
               'l12-c39' == blocoId && 'asfalto',

               'l10-c40' == blocoId && 'asfalto',
               'l11-c40' == blocoId && 'asfalto',
               'l12-c40' == blocoId && 'asfalto',

               'l10-c41' == blocoId && 'asfalto',
               'l11-c41' == blocoId && 'asfalto',
               'l12-c41' == blocoId && 'asfalto',

               'l10-c42' == blocoId && 'asfalto',
               'l11-c42' == blocoId && 'asfalto',
               'l12-c42' == blocoId && 'asfalto',

               'l10-c43' == blocoId && 'asfalto',
               'l11-c43' == blocoId && 'asfalto',
               'l12-c43' == blocoId && 'asfalto',

               'l10-c44' == blocoId && 'asfalto',
               'l11-c44' == blocoId && 'asfalto',
               'l12-c44' == blocoId && 'asfalto',

               'l10-c45' == blocoId && 'asfalto',
               'l11-c45' == blocoId && 'asfalto',
               'l12-c45' == blocoId && 'asfalto',

               'l10-c46' == blocoId && 'asfalto',
               'l11-c46' == blocoId && 'asfalto',
               'l12-c46' == blocoId && 'asfalto',

               'l10-c47' == blocoId && 'asfalto',
               'l11-c47' == blocoId && 'asfalto',
               'l12-c47' == blocoId && 'asfalto',

               'l10-c48' == blocoId && 'asfalto',
               'l11-c48' == blocoId && 'asfalto',
               'l12-c48' == blocoId && 'asfalto',

               'l10-c49' == blocoId && 'asfalto',
               'l11-c49' == blocoId && 'asfalto',
               'l12-c49' == blocoId && 'asfalto',

               'l10-c50' == blocoId && 'asfalto',
               'l11-c50' == blocoId && 'asfalto',
               'l12-c50' == blocoId && 'asfalto'
            ];
        }
    }
}