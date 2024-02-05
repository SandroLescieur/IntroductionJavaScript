<script>

// lista.slice(m,n) sirve para cortar la lista desde el índice m hasta el indice n-1

function maxLista (lista) {

    let max;
    let prim = lista[0];
    
    if (lista.length == 1) {
    	max = lista[0];
    } else {
    	lista = lista.slice(1, lista.length);
        let maxResto = maxLista(lista);
        if (prim < maxResto){
        	max = maxResto;
        } else {
        	max = prim;
        }
    }
    return max;
}   

document.write(maxLista([100000000,300000]));

</script>
