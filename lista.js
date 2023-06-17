const pegaLista = function(){
    let lista = [];
    let obj = Object.keys(localStorage);
    obj.forEach(element => {
        lista.push(element);
    });
    return lista;
}

const adicionarItem = function(item){
    localStorage.setItem(item.nome, JSON.stringify(item));
}

const removerItem = function(item){
    localStorage.removeItem(item.nome);
    
}
const pegaItem = function(key){
    return JSON.parse(localStorage.getItem(key));
}

const marcarItem = function(key){
   
    let itemMarcar = JSON.parse(localStorage.getItem(key));
    if(itemMarcar.comprado === true){
        itemMarcar.comprado = false;
        adicionarItem(itemMarcar);
    }
    else{
        itemMarcar.comprado = true;
        adicionarItem(itemMarcar);
    }
} 


export {adicionarItem, removerItem, marcarItem, pegaItem, pegaLista}