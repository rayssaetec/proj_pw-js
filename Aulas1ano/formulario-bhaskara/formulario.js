let proximoId = 1

function calcular(){
    //Entrada de valores do formulário
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const x = document.getElementById("x").value;

    var delta = b*b - 4*a*c;

    if (delta >= 0){
        var x1 = (-b + Math.sqrt(delta)) / (2*a);
        var x2 =  (-b - Math.sqrt(delta)) / (2*a);
    }else{
        var x1 = 'O delta é negativo. Equação não possui raízes reais';
        var x2 =  'O delta é negativo. Equação não possui raízes reais';
    }


    if(x == 1){
        var res = x1;
    }else if(x == 2){
        var res = x2;
    }else{
        var res = 'Digite 1 ou 2';
    }

    //Se for preenchido vazio
    if(a === '' || b === '' || c === '' || x === ''){
        alert("Preencha os valores ausentes do formulário!")
    }else {
        //Cria uma linha na tabela se não existir
        const tabela = document.getElementById("tabelaDados") .getElementsByTagName('tbody') [0];
        //Inserindo uma nova linha
        const novalinha = tabela.insertRow();
        
        //Inserindo os valores da linha
        const celId = novalinha.insertCell(0);
        const celA = novalinha.insertCell(1);
        const celB = novalinha.insertCell(2);
        const celC = novalinha.insertCell(3);
        const celX = novalinha.insertCell(4);
        
        //Inserindo os valores dentro das celulas
        celId.innerHTML = proximoId;
        celA.innerHTML = a;
        celB.innerHTML = b;
        celC.innerHTML = c;
        celX.innerHTML = res;
        
        proximoId++
        
        //Limpar formulário 
        document.getElementById("linhaForm").reset();
    }
}