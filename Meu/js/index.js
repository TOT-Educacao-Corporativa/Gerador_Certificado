const nomeAluno = document.getElementById('nome');

function mostrarNome() {
    const nomeAlunoTela = document.querySelector('input');
    nomeAluno.innerText = ` Nome no certificado : ${nomeAlunoTela} `
}
