let proximoId = 1


function adicionarLinha(){
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const admissão = document.getElementById("admissão").value;
    const demissao = document.getElementById("demissao").value;


    if(nome === '' || idade === '' || demissao === '' || admissão === ''){
        alert("preencha os valores do formulario")
    }
    else {
        const tabela = document.getElementById("tableDados").getElementsByTagName('tbody')[0];

        const novaLinha = tabela.insertRow();

        const celId = novaLinha.insertCell(0);
        const celNome = novaLinha.insertCell(1);
        const celIdade = novaLinha.insertCell(2);
        const celAdmissao = novaLinha.insertCell(3); 
        const celDemissão = novaLinha.insertCell(4);

        celId.innerHTML = proximoId;
        celNome.innerHTML = nome;
        celIdade.innerHTML = idade;
        celAdmissao.innerHTML = admissão;
        celDemissão.innerHTML = demissao;

        proximoId++

        document.getElementById("linhaForm").reset();
    }
}