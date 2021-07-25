class aluno {
	constructor(nome, sexo, idade) {
		this.nome = 'indefinido';
		this.sexo = 'indefinido';
		this.idade = 0;
	}
}

var arrayAlunos = []
var qtdAlunos = 0

function exibeDivs(id) {
	if(document.getElementById(id).style.display == "block") {
	  document.getElementById(id).style.display = "none";
	  return;
	}
	if(document.getElementById(id).classList.contains("hide")) {
		Array.from(document.getElementsByClassName("hide")).forEach(
			div => (div.style.display = "none")
		);
	} else {
		Array.from(document.getElementsByClassName("aHide")).forEach(
			div => (div.style.display = "none")
		);
	}
	document.getElementById(id).style.display = "block";
	if(id == "listar")
		listar()
}

function cadastrar(qtdAlunos) {

	let novoAluno = new aluno()
	let confirmacoes = 0

	novoAluno.nome  = document.querySelector('input#txtNome').value
	if(verificaNome(novoAluno.nome) == 1)
		confirmacoes++
	else
		window.alert(`Nome inválido.`)
	
	novoAluno.sexo  = document.querySelector('select#sSexo').value
	if(verificaSexo(novoAluno.sexo) == 1)
		confirmacoes++
	else
		window.alert(`Sexo inválido.`)

	novoAluno.idade = document.querySelector('input#numIdade').value
	if(verificaIdade(novoAluno.idade) == 1)
		confirmacoes++
	else
		window.alert(`Idade inválida.`)

	if(confirmacoes == 3) {
		arrayAlunos.push(novoAluno)
		this.qtdAlunos++;
		window.alert(`Aluno ${this.qtdAlunos} cadastrado com sucesso.`)
	}
}

function listar(qtdAlunos) {

	let list = document.getElementById("listaAlunos")

	list.textContent = ''
	
	if(this.qtdAlunos < 1)
		list.textContent = 'Nenhum aluno cadastrado.'

	for(let i = 0; i < this.qtdAlunos; i++) {
		let aluno = document.createElement('div')
		let nome  = document.createElement('p')
		let sexo  = document.createElement('p')
		let idade = document.createElement('p')

		aluno.setAttribute('id', `id${i+1}`)
		aluno.setAttribute('class', 'divAluno')

		aluno.textContent = `Aluno ${i+1}`
		nome.textContent = `Nome: ${arrayAlunos[i].nome}`
		sexo.textContent = `Sexo: ${arrayAlunos[i].sexo}`
		idade.textContent = `Idade: ${arrayAlunos[i].idade}`
		
		aluno.appendChild(nome)
		aluno.appendChild(sexo)
		aluno.appendChild(idade)
		list.appendChild(aluno)
	}
}

let btnAlterarNome = document.getElementById('btnAlterarNome')
btnAlterarNome.addEventListener('click', (qtdAlunos) => {

	let novoNome = document.getElementById('novoNome').value
	let idAluno  = document.getElementById('alterarAluno').value

	if(verificaNome(novoNome) == 0) {
		window.alert(`Nome inválido.`)
	} else {
		if(verificaId(idAluno, this.qtdAlunos) == 1) {
			arrayAlunos[idAluno-1].nome = novoNome
			window.alert(`Nome do aluno ${idAluno} alterado para ${novoNome} com sucesso.`)
		} else
			window.alert(`ID inválido.`)
	}
})

let btnAlterarSexo = document.getElementById('btnAlterarSexo')
btnAlterarSexo.addEventListener('click', (qtdAlunos) => {

	let novoSexo = document.getElementById('sNovoSexo').value
	let idAluno  = document.getElementById('alterarAluno').value
	
	if(verificaSexo(novoSexo) == 0) {
		window.alert(`Sexo inválido.`)
	} else {
		if(verificaId(idAluno, this.qtdAlunos) == 1) {
			arrayAlunos[idAluno-1].sexo = novoSexo
			window.alert(`Sexo do aluno ${idAluno} alterado para ${novoSexo} com sucesso.`)
		} else	
			window.alert(`ID inválido.`)
	}
})

let btnAlterarIdade = document.getElementById('btnAlterarIdade')
btnAlterarIdade.addEventListener('click', (qtdAlunos) => {

	let novaIdade = document.getElementById('novaIdade').value
	let idAluno   = document.getElementById('alterarAluno').value

	if(verificaIdade(novaIdade) == 0) {
		window.alert(`Idade inválido.`)
	} else {
		if(verificaId(idAluno, this.qtdAlunos) == 1) {
			arrayAlunos[idAluno-1].idade = novaIdade
			window.alert(`Idade do aluno ${idAluno} alterada para ${novaIdade} com sucesso.`)
		} else
			window.alert(`ID inválido.`)
	}
})

function remover(qtdAlunos) {

	if(this.qtdAlunos > 0) {
		let idAluno = document.getElementById("idAluno").value
		if(verificaId(idAluno, this.qtdAlunos) == 1) {
			arrayAlunos.splice(idAluno-1, 1)
			this.qtdAlunos--;
			window.alert(`Aluno ${idAluno} removido com sucesso.`)
		} else
			window.alert(`ID inválido.`)
	} else
		window.alert('Nenhum aluno na lista.')
}

let btnRemoverTodos = document.getElementById('bRemoverTodos')
btnRemoverTodos.addEventListener('click', (qtdAlunos) => {
	
	if(this.qtdAlunos > 0) {
		let confirm = window.confirm('Tem certeza que deseja excluir todos os alunos?')

		if(confirm) {
			for(let i = 0; i < this.qtdAlunos; i++) {
				arrayAlunos.splice(i, 1)
			}
			this.qtdAlunos = 0
			window.alert(`Todos os alunos foram apagados.`)
		}
	} else
		window.alert(`Nenhum aluno na lista.`)
})

function verificaNome(nome) {
	let retorno = 0
	if(nome.length <= 3) 
		retorno = 0
	else
		retorno = 1
	return retorno
}

function verificaSexo(sexo) {
	let retorno = 0
	if(sexo == 'Escolha sua opção')
		retorno = 0
	else
		retorno = 1
	return retorno
}

function verificaIdade(idade) {
	let retorno = 0
	if(idade <= 3 || idade >= 100)
		retorno = 0
	else
		retorno = 1
	return retorno
}

function verificaId(id, qtdAlunos) {
	let retorno = 0
	if(id < 1 || id > this.qtdAlunos)
		retorno = 0
	else
		retorno = 1
	return retorno
}