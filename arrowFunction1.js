//função arrow é sempre anônima
//this não varia na função arrow

let dobro = function (a) {
    return a * 2
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //se tirar o corpo da função(bloco emtre chaves) o retorno é implicito
console.log(dobro(Math.PI));

let ola = function() {
    return 'olá'
}

ola = () => 'olá 2'
ola = _ => 'olá 3' //outra forma de escrever mas o underline é uma função
console.log(ola())

