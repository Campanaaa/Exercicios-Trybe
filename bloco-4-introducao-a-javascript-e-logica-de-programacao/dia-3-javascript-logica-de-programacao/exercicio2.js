let n = 5;
let aux = '';

for (let linha = 0; linha < n; linha += 1) {
	for (let coluna = 0; coluna <= linha; coluna += 1) {
			aux += '*';
	}
	console.log(aux);
	aux = '';
}
