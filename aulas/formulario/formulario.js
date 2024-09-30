let proximoId = 1

function adicionarLinha(){
    //Entrada de valores do formulário
    const produto = document.getElementById("produto").value;
    const valor = document.getElementById("valor").value;
    const data = document.getElementById("data").value;
    const marca = document.getElementById("marca").value;
    const segmento = document.getElementById("segmento").value;

    //Se for preenchido vazio
    if(produto === '' || valor === '' || data === '' || marca === '' || segmento === '')
        alert("Preencha os valores ausentes do formulário!")
    else {
        //Cria uma linha na tabela se não existir
const tabela = document.getElementById("tabelaDados") .getElementsByTagName('tbody') [0];
//Inserindo uma nova linha
const novalinha = tabela.insertRow();

//Inserindo os valores da linha
const celId = novalinha.insertCell(0);
const celProduto = novalinha.insertCell(1);
const celValor = novalinha.insertCell(2);
const celData = novalinha.insertCell(3);
const celMarca = novalinha.insertCell(4);
const celSegmento = novalinha.insertCell(5);

//Inserindo os valores dentro das celulas
celId.innerHTML = proximoId;
celProduto.innerHTML = produto;
celValor.innerHTML = valor;
celData.innerHTML = data;
celMarca.innerHTML = marca;
celSegmento.innerHTML = segmento;

proximoId++

//Limpar formulário 
document.getElementById("linhaForm").reset();
    }
}




