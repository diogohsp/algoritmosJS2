const listaLivros = require ('./array');

function mergeSort(array, nivelAninhamento = 0){

    console.log(`nivel de Aninhamento: ${nivelAninhamento}`)
    console.log(array)
    
    if(array.length > 1){
        const meio = Math.floor(array.length / 2); //Achando o meio do array, utilizando Math.floor para arrendondar para baixo o resultado da divisao
        const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento + 1); //O slice divide o array do 1° parametro passado até o 2°
        const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento + 1); //Chamando de forma recursiva a propria função mergeSort para fazer a divisao até o caso base
        array = ordena(parte1,parte2); //chamando a função ordena
    }
    return array;
}

function ordena(parte1, parte2){
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        let produtoAtualParte2 = parte2[posicaoAtualParte2];

        if(produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1); //O push puxa "em ordem de chegada" o produto do indice atual para a lista resultado
            posicaoAtualParte1++;
        }else{
            resultado.push(produtoAtualParte2);
            posicaoAtualParte2++;
        }
    }

    return resultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2)) //posicaoAtualParte1 é menor que parte1.length ?(Se for true, ele executa) parte1.slice(posicaoAtualParte1 até o final do array) ele concatena(Junta) esse slice na lista resultado  
}

console.log(mergeSort(listaLivros));