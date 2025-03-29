let proximoId = 1

// Referente á entrada do usuário 
function adicionarlinha(){ 
    // Adicionando as entradas á constantes criadas
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const admissao = document.getElementById("admissão").value;
    const demissao = document.getElementById("demissão").value;

    // Se for preenchido vazio
    // "||" siginificam OU
    if (nome === '' || idade === '' || admissao === ''){
        alert('Preencha os valores do formulário') // Saída 
    }

    // Cria uma linha na tabela se não existir
    const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody') [0];

    // Inserindo uma nova linha
    const novaLinha = tabela.insertRow;

    //  Inserindo os valores da linha 
    const celId = novaLinha.insertCell(0);
    const celNome = novaLinha.insertCell(1);
    const celIdade = novaLinha.insertCell(2);
    const celAdmissao = novaLinha.insertCell(3);
    const celDemissao = novaLinha.insertCell(4);

    // Inserindo os valores dentro das células
    celId.innerHTML = proximoId;
    celNome.innerHTML = nome;
    celIdade.innerHTML = idade;
    celAdmissão.innerHTML = admissao;
    celDemissão.innerHTML = demissao;

    proximoId++

    //Limpar formulário
    document.getElementById("linhaForm").reset();

}
