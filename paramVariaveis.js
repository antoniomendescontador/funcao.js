//função que pode receber n parametros
//toda função possui arguments como um arrey vazio que pode ser utilizado
function soma() {
    let soma = 0;
    for(i in arguments){
        soma += arguments[i]
    }

    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1,2.2,3.7));
console.log(soma(1.1,2.2,3.7, 'teste'));

