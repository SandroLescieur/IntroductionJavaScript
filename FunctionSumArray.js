<script>

function sumArray(numeros) {
	let total = 0;
	let i = 0;
	for (i; i < numeros.length; i++) {           // También podíamos poner for (i=0; i < numeros.length; i++) y así quitamos la linea let i = 0. 
		total += numeros[i];
	}
	return total;
} 

document.write('La suma de todos los elementos es: ', sumArray([1,2,3]))

</script>
