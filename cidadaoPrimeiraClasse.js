//Função em JS é o cidadão de primeira classe(quando trata função como dado)
// função de auta ordem, podendo tratar como dado(parâmetro, atributo, etc)
//pode colocar função dentro de função e dentro de objeto, constante e variável

//criar de forma literal
function fun1(){ }

//armazenar em um variável
const fun2 = function(){ }

//armazenar dentro do array
const array = [function (a, b) { return a+b }, fun1, fun2]
console.log(array[0](2,3));

//armazenar em um atributo de um objeto
const obj = { }
obj.falar = function(){return 'opa'}
console.log(obj.falar());

//passar função como param
function run(fun) {
    fun()
}

run(function(){console.log('executando...')})

//uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(4)