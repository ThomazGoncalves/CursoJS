const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc = peso / (altura * altura);
let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();
let anoNascimento = anoAtual - idade

console.log(nome, sobrenome, 'tem', idade, 'anos,', 'pesa', peso, 'kg');

// Template strings '${variável}'

console.log(`tem ${altura}m de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);

