//clousure é um escopo criado quando a função é criada
// Esse escopo permite a função acessar e manipular variáveis externas
//contexto lexico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())