let info = {
	personagem: 'Margarida',
	origem: 'Pato Donald',
	nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

//exercicio 1

//console.log('Bem-vinda, ' + info.personagem);

//exercicio 2

info.recorrente = 'Sim';
//console.log(info);

//exercicio 3
for (keys in info){
    console.log(keys);
}