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
// let livro1 = leitor.livrosFavoritos[0].titulo;
// let nomeInteiro = leitor.nome + ' ' + leitor.sobrenome;

// console.log('O livro favorito de ' + nomeInteiro + "se chama '" + livro1 + "'");

//exercicio 7
let harry = {
	titulo: 'Harry Potter e o Prisioneiro de Azkaban',
	autor: 'JK Rowling',
	editora: 'Rocco'
};

leitor.livrosFavoritos.push(harry);

//exerciocio 8
let numeroLivros = leitor.livrosFavoritos.length;

console.log(leitor.nome + ' tem  ' + numeroLivros + ' livros favoritos');
