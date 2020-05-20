const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao) //pega o atributo do próprio objeto
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional vs OO

//usando o bind
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()