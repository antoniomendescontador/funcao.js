//sem bind da NaN
function Pessoa1() {
    this.idade = 0
    setInterval(function () {
        this.idade++
        console.log(this.idade);
        
    }, 1000)
}
new Pessoa1

//com bind se soluciona o problema
function Pessoa2() {
    this.idade = 0
    setInterval(function () {
        this.idade++
        console.log(this.idade);
        
    }.bind(this), 1000) //se tirar o bind ele não acha o atributo idade e da NaN
}

new Pessoa2

//outra solução: criar uma constante self
function Pessoa3() {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade);
        
    }, 1000)
}

new Pessoa3