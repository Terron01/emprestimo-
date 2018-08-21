let nome = prompt(` Digite aqui o seu nome: `);

console.log(`o nome digitado foi ${nome}`);

alert (`${nome}, seja bem-vindo ao Terronbank! Inicie o seu empréstimo!`);

 alert("Responda as seguintes questões para avaliarmos o seu perfil.");

let idade = prompt("Digite aqui sua idade:");
let condicaoIdade = true;

if(isNaN(Number(idade)) || idade === null){
    console.log("Valor inválido");
    condicaoIdade= false;
}
else if(idade > 60){
    console.log("idade muito avancada");
    condicaoIdade= false;
   }
else if(idade >= 21){
    console.log(" seu emprestimo esta quase completo, só falta mais algumas informações  ");
    condicaoIdade= true;
}
else {
    console.log("negado deve ter idade maior que 22 anos");
    condicaoIdade= false;
}

 
let renda = prompt("Digite aqui a sua renda mensal. Exemplo: 1000");
let condicaoRenda = true;

if(isNaN(Number(renda)) || renda === null){
    console.log("Valor inválido");
    condicaoRenda = false;
}
else if(renda >= 1500){
    console.log(" seu emprestimo esta quase completo, só falta mais algumas informações");
    condicaoRenda = true;
}
else{
    console.log("negado deve ter renda maior que 1500 reais");
    condicaoRenda = false;
}

let emprestimo = prompt("Digite aqui o valor desejado para o seu emprestimo. Exemplo: 1000");
let condicaoEmprestimo = true;

if(isNaN(Number(emprestimo)) || emprestimo === null){
    console.log("Valor inválido");
    condicaoEmprestimo = false;
}
else if(emprestimo >= 1000 && emprestimo <= 20*renda){
    console.log(" seu emprestimo esta quase completo, só falta mais algumas informações");
    condicaoEmprestimo = true;
}
else{
    console.log("negado, deve pedir um valor coerrente");
    condicaoEmprestimo = false;
}


if(condicaoEmprestimo && condicaoIdade && condicaoRenda){
    alert("Seu empréstimo foi aprovado com sucesso!");
}
else{
    alert("Seu empréstimo foi negado.");
}
