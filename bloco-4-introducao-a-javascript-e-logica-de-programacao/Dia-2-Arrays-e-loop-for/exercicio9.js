let lista = [];
let divisao = [];

for (i = 1; i < 26; i += 1) {
	lista.push(i);
    
}
for (let i = 0; i < lista.length; i += 1) {
    number = (lista[i] / 2);
    divisao.push(number);
}

console.log(divisao);
