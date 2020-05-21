function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo público
    this.acelar = function(){
        if(velocidadeAtual + delta < velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo público
    this.getvelocidadeAtual = function (){ 
        return velocidadeAtual};
    
}

const uno = new Carro
uno.acelar()
console.log(uno.getvelocidadeAtual);

const ferrari = new Carro(350, 20)
ferrari.acelar()
console.log(ferrari.getvelocidadeAtual());
