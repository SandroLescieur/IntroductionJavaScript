<script>

function mxd (a,b) {
	let resultado;
	if (b==0) {
	resultado = a;
	} else {
		resultado = mxd(b,a%b);
	}
	return resultado;
}

document.write('El MCD es= ' + mxd(11, 55));

</script>
