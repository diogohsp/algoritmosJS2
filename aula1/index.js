const {edGalho, edFolha} = require('./arrays');

function juntaLista(lista1,lista2){
    let listaFinal = []; //Lista final com a junção dos arrays
    let posicaoAtualLista1 = 0; //Indice lista1 
    let posicaoAtualLista2 = 0; //Indice lista2
    let atual=0; //Indice Lista Final

    while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length){ //verificando se há indices na lista para ser percorrido
        
        let produtoAtualLista1 = lista1[posicaoAtualLista1]; //Indice atual lista 1
        let produtoAtualLista2 = lista2[posicaoAtualLista2]; //Indice atual lista 2
        console.log(`Comparando ${produtoAtualLista1.titulo} com ${produtoAtualLista2.titulo}`)

        if(produtoAtualLista1.preco < produtoAtualLista2.preco){ //Comparando preço entre produtos de 2 listas diferentes no mesmo indice Lista1[1] e lista2[1]
            listaFinal[atual] = produtoAtualLista1;
            posicaoAtualLista1++;
        }else{
            listaFinal[atual] = produtoAtualLista2;
            posicaoAtualLista2++;
        }

        atual++;
    }

    while(posicaoAtualLista1 < lista1.length){ //Pegando a sobra das listas quando uma acaba, já que esse caso as listas proprias jas estao ordenadas é necessario somente puxar o objeto
        listaFinal[atual] = lista1[posicaoAtualLista1];
        posicaoAtualLista1++;
        atual++
    }
    while(posicaoAtualLista2 < lista2.length){
        listaFinal[atual] = lista2[posicaoAtualLista2];
        posicaoAtualLista2++;
        atual++
    }

    return listaFinal;
}

console.log(juntaLista(edGalho, edFolha)); //execução da função