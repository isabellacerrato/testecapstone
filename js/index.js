//produtos na vitrine
const vitrine= document.querySelector(".vitrine")
const carrinhoCompra= document.querySelector(".carrinhoCompra")
const vazia = document.createElement("div")
vazia.classList.add("vazia")
const carrinhoVazio = document.createElement("h1")
carrinhoVazio.classList.add("carrinhoVazio")
carrinhoVazio.innerText = "carrinho vazio"
const adicionarItens= document.createElement("p")
adicionarItens.classList.add("adicionarItens")
adicionarItens.innerText = "adicionar itens"
vazia.appendChild(carrinhoVazio)
vazia.appendChild(adicionarItens)

function adicionarVitrine() {
    for (let i = 0; i < data.length; i++) {
        const cards = document.createElement("div")
        cards.classList.add("cards")
        const imagem= document.createElement("div")
        imagem.classList.add("imagem")
        const img= document.createElement("img")
        img.src= data[i].img
        const descricao = document.createElement("div")
        descricao.classList.add("descricao")
        const ul = document.createElement("ul")
        const categorias = document.createElement("li")
        categorias.classList.add("categoria")
        categorias.innerText = data[i].tag
        const nomeProduto= document.createElement ("li")
        nomeProduto.classList.add("nomeProduto")
        nomeProduto.innerText = data[i].nameItem
        const descricaoProduto = document.createElement("li")
        descricaoProduto.classList.add("descricaoProduto")
        descricaoProduto.innerText = data[i].description
        const preco= document.createElement("li")
        preco.classList("preco")
        preco.innerText = `R$${data[i].value.toFixed(2)}`
        const adicionarCarrinho = document.createElement("li")
        adicionarCarrinho.classList.add("adicionarCarrinho")
        const a = document.createElement("a")
        a.innerText = data[i].addCart
        adicionarCarrinho.appendChild(a)
        imagem.appendChild(img)
        descricao.appendChild(ul)

        ul.appendChild(categorias)
        ul.appendChild(nomeProduto)
        ul.appendChild(descricaoProduto)
        ul.appendChild(preco)
        ul.appendChild(adicionarCarrinho)
        cards.appendChild(imagem)
        cards.appendChild(descricao)
        vitrine.appendChild(cards)

//adicionar e remover do carrinho
addCarrinho.addEventListener("click", function(){
    const carrinhoProduto = document.createElementNS("div")
    carrinhoProduto.classList.add("produtoCarrinho")
    const compras = document.createElement("div")
    compras.classList.add("compras")
    const img= document.createElement("img")
    img.src = data[i].img
    const ul = document.createElement("ul")
    const produtoCarrinho = document.createElement("li")
    produtoCarrinho.classList.add("produtoCarrinho")
    produtoCarrinho.innerText = data[i].nameItem
    const precoProduto = document.createElement("li")
    precoProduto.classList.add("precoProduto")
    precoProduto.innerText = `R$${data[i].value.toFixed(2)}`
    const remove = document.createElement("a")
    remove.appendChild(a)
    a.innerText = "remover produto"

    ul.appendChild(produtoCarrinho)
    ul.appendChild(precoProduto)
    ul.appendChild(remove)
    compras.appendChild(img)
    carrinhoProduto.appendChild(compras)
    carrinhoProduto.appendChild(ul)
    carrinhoCompra.appendChild(carrinhoProduto)
    console.log(carrinhoProduto)

    remove.addEventListener("click", function(){
        carrinhoProduto.removeChild(carrinhoProduto)

        console.log(carrinhoCompra)
            })
        })
    }
}
//categorias no cabeçalho
    const todos = document.querySelector(".todos")
    const acessorios = document.querySelector(".acessorios")
    const calçados = document.querySelector(".calçados")
    const camisetas = document.querySelector(".camisetas")
    
    todos.addEventListener("click", function(){
        vitrine.innerHTML = ""
        addVitrine()
    })
//pesquisar na barra

//soma da quantidade e valor do carrinho