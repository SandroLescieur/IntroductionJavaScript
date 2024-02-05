<script>

// lista.slice(m,n) sirve para cortar la lista desde el índice m hasta el indice n-1

function maxLista (lista) {
    let max;
    if (lista.length == 1) {
        max = lista[0]
    } else {
        let nLista = lista.length;
        let comodin = lista[0];
        for (i=1; i < nLista; i++) {
            if (comodin < lista[i]) {
                comodin = lista[i]
            }
        }
        max = comodin
    }

    return max
}   

document.write(maxLista([1,2,30,6]));

</script>
