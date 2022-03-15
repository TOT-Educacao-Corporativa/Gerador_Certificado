var nomeAluno = document.getElementById('nome');
var dataConclusao = document.getElementById('data');
var botaoGerar = document.getElementById('gerar');
const nomeAlunoTela = document.querySelector('.nomeAluno')

window.onload = function mostrarNome() {
    nomeAlunoTela.textContent = nomeAluno
}
