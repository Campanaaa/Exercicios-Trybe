let leitor = {
	nome: 'Julia',
	sobrenome: 'Pessoa',
	idade: 21,
	livrosFavoritos: [
		{
			titulo: 'O Pior Dia de Todos',
			autor: 'Daniela Kopsch',
			editora: 'Tordesilhas'
		}
	]
};

//exercicio 6
let livro1 = leitor.livrosFavoritos[0].titulo;
let nomeInteiro = leitor.nome + ' ' + leitor.sobrenome;

console.log('O livro favorito de ' + nomeInteiro + "se chama '" + livro1 + "'");
