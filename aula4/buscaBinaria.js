const listaLivros = require('./arrayOrdenado');

function buscaBinaria(array, de, ate, valoraBuscado){
    console.log(de, ate)
    const meio = Math.floor((de + ate) / 2)
    const atual = array[meio]

    if(de > ate){
        return -1;
    }

    if(valoraBuscado === atual.preco){
        return meio;
    }

    if(valoraBuscado < atual.preco){
        return buscaBinaria(array, 0, meio - 1, valoraBuscado)
    }
    if(valoraBuscado > atual.preco){
        return buscaBinaria(array, meio + 1, ate, valoraBuscado)
    }
}

console.log(buscaBinaria(listaLivros, 0 , listaLivros.length - 1, 43))