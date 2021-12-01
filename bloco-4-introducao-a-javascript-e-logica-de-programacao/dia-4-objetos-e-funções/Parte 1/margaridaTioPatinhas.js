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

// for (keys in info){
//     console.log(keys);
// }

//exercicio 4

// for (keys in info){
//     console.log(info[keys]);
// }

//exercicio 5

let infoPatinhas = {
	personagem: 'Tio Patinhas',
	origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
	nota: 'O último MacPatinhas',
	recorrente: 'Sim'
};

let recorrenteMargarida = info.recorrente;
let recorrenteTioPatinhas = infoPatinhas.recorrente;

delete info.recorrente;
delete infoPatinhas.recorrente;

for (keys in info){
    console.log(info[keys] + ' e ' + infoPatinhas[keys]);
}

if (recorrenteMargarida === 'Sim' && recorrenteTioPatinhas === 'Sim') {
    console.log('Ambos recorrentes');
}