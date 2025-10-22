import express from 'express';
const host = 'localhost';
const porta = 3000;

const server=express(); //ofereçendo ao desenvolvedor um servidor http do modo expresso


server.get('/', (requisicao,resposta) => {
    resposta.send(`
       <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1>  FORMULARIO PARA INSCRIÇÃO </h1>
    <form action=""> 
        <label for="idade"> Informe a idade </label><br>
        <input type="number" id="idade"><br>

        <label for="sexo"> Informe o Sexo </label><br>
        <select name="sexo" id="sexo">
        <option value="">Selecione...</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
        </select> <br>

        <label for="salbase">Informe o salario base </label><br>
        <input type="number" id="salbase"><br>
        <label for="anoc"> Informe o ano de contratação </label><br>
        <input type="number" id="anoc"><br>
        <label for="mat">Matricula</label><br>
        <input type="number" id="mat"><br>
        <input type="button" value="Enviar" onclick="calcsal()"><br>
    </form><br>
    <div id="resposta">
        <p>
            
        </p>
    </div>

    <script>
        function calcsal()
        {
            let idade = parseInt(document.getElementById('idade').value);
            let sexo = document.getElementById('sexo').value;
            let salbase = parseFloat(document.getElementById('salbase').value);
            let anoc = parseInt(document.getElementById('anoc').value);
            let mat = parseInt(document.getElementById('mat').value);
            let resposta = document.getElementById('resposta');

            if(isNaN(idade) || idade <=16 ){
                alert('Idade invalida, deve ser maior que 16 anos.');
            }
            
            if(isNaN(anoc) || anoc<= 1960 ){
                    alert('Ano invalido!, ano deve ser maior que 1960.');
            }
            if(isNaN(salbase) || salbase <= 0){
                alert('Salario invalido! ');
            }
            if(isNaN(mat) || mat <=0){
                alert('Matricula invalida! ');
            }

            let anosEmpresa = 2025 - anoc;
            let reajuste = 0;
            let valorfinal = salbase;
            
            if(idade >=18 && idade <= 39){
                if(sexo === "Masculino")
                    reajuste = 0.10;
                else
                    reajuste = 0.08;
            }
            else if(idade >= 40 && idade <= 69){
                if(sexo === "Masculino")
                    reajuste = 0.08;
                else
                    reajuste = 0.10;
            }
            else if(idade >=70 && idade <= 99 ){
                if(sexo === "Masculino")
                    reajuste = 0.15;
                else 
                    reajuste = 0.17;
            }
            else
            {
                alert('Faixa etaria invalida !!');
            }
            valorfinal += salbase * reajuste;
            let ajusteFixo =0;

            if (anosEmpresa <= 10) {
    // Descontos
    if (idade >= 18 && idade <= 39) {
        if (sexo === "Masculino") {
            ajusteFixo = -10;
        } else {
            ajusteFixo = -11;
        }
    } else if (idade >= 40 && idade <= 69) {
        if (sexo === "Masculino") {
            ajusteFixo = -5;
        } else {
            ajusteFixo = -7;
        }
    } else if (idade >= 70 && idade <= 99) {
        if (sexo === "Masculino") {
            ajusteFixo = -15;
        } else {
            ajusteFixo = -17;
        }
    }
} else {
    // Acréscimos
    if (idade >= 18 && idade <= 39) {
        if (sexo === "Masculino") {
            ajusteFixo = 17;
        } else {
            ajusteFixo = 16;
        }
    } else if (idade >= 40 && idade <= 69) {
        if (sexo === "Masculino") {
            ajusteFixo = 15;
        } else {
            ajusteFixo = 14;
        }
    } else if (idade >= 70 && idade <= 99) {
        if (sexo === "Masculino") {
            ajusteFixo = 13;
        } else {
            ajusteFixo = 12;
        }
    }
}   

    valorfinal += ajusteFixo;
    resposta.innerHTML = "<p>Novo salário: R$ " + valorfinal + "</p>";
    resposta.style.backgroundColor='green';
    resposta.style.color='white';
    resposta.style.width="100px";
    resposta.style.height='100px';
    resposta.style.border='1px solid green';
    resposta.style.borderRadius="7px";

    

}

    </script>

</body>
</html>
        `)
});

server.listen(porta, host, () => {
    console.log('Servidor escutando em http://' + host +':' + porta );
} )