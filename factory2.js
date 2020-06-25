//função factory com parametros
function criarProduto(nome, preco, desconto = 0.1) {
    return {nome, preco, desconto}
}

console.log(criarProduto('tony', 45, 0.2));
