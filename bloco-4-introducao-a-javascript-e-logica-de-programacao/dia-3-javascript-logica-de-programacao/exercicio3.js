let n = 5;
let aux = '';
let space = '';

for (let linha = 0; linha < n; linha += 1) {
	for (let coluna = 0; coluna < n; coluna += 1) {
		space += ' ';
	}
	console.log(space);
	space = '';
}
