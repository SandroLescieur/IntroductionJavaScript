<script>

function suma (a, b) {
	return a + b;
}

let a = Number (prompt('Escriba el primer numero: '));             // Es necesario especificar que el valor ingresado es numérico sino concatenará las cadenas.
let b = Number (prompt('Escriba el segundo valor: '));

document.write('La suma es: ', suma(a,b));

</script>
