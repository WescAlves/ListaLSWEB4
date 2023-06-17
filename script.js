import {adicionarItem, pegaLista, pegaItem, removerItem, marcarItem} from './lista.js'
window.addEventListener("load", () => {
    let lista = pegaLista();
    printar(lista);
})
const inputItem = document.querySelector("#input-item");
const inputPreco = document.querySelector("#input-price");
const addBtn = document.querySelector("#add-btn");
const inputRem = document.querySelector("#input-remover")
const tabela = document.querySelector("#tabela");
class item {
    constructor (nome, preco){
        this.nome = nome;
        this.preco = preco;
        this.comprado = false;
    }
}

function printar(lista){
    console.log("Entrou aqui")
    tabela.innerHTML = '';
    let topo = document.createElement("tr");
    let tdNome = document.createElement("td");
    let tdValor = document.createElement("td");
    let tdComprado = document.createElement("td");
    let tdRemove = document.createElement("td");
    tdNome.textContent = 'NOME';
    tdValor.textContent = 'VALOR';
    tdComprado.textContent = 'CHECKLIST';
    tdRemove.textContent = 'AÇÕES';
    tabela.append(topo);
    topo.appendChild(tdNome);
    topo.appendChild(tdValor);
    topo.appendChild(tdComprado);
    topo.appendChild(tdRemove);
    lista.forEach(key => {
        let item = pegaItem(key);
        let trProduto = document.createElement("tr");
        let tdItemNome = document.createElement("td");
        let tdItemValor = document.createElement("td");
        let tdItemComprado = document.createElement("td");
        let tdItemAcoes = document.createElement("Td");
        tdItemNome.textContent = item.nome;
        tdItemValor.textContent = `R$ ${item.preco}`
        let input = document.createElement("input");
        input.type = 'checkbox';
        input.checked = item.comprado;
        input.addEventListener("click", function(){
            marcarItem(item.nome);
            
        })
        let botaoRem = document.createElement("button");
        botaoRem.textContent = 'Remover';
        botaoRem.id = "btn-rem"
        botaoRem.addEventListener("click", function (){
            console.log('entrou')
            removerItem(item);
            lista = pegaLista();
            printar(lista);
        })
        tdItemComprado.appendChild(input);
        tdItemAcoes.appendChild(botaoRem);
        trProduto.appendChild(tdItemNome);
        trProduto.appendChild(tdItemValor);
        trProduto.appendChild(tdItemComprado);
        trProduto.appendChild(tdItemAcoes);
        tabela.appendChild(trProduto);


    });
}



addBtn.addEventListener("click", () => {
    //console.log("Entrou aqui")
    const nome = inputItem.value;
    const preco = inputPreco.value;
    let novoItem = new item(nome, preco)
    console.log(novoItem);    
    adicionarItem(novoItem);
    let lista = pegaLista();
    printar(lista);    
})





