let salarioBruto = 3000;
let Inss;
let salarioBase;
let aliquotaIr;
let parcelaDeducao;
let ir;
let salarioLiquido;

if (salarioBruto >= 0 && salarioBruto <= 1556.94) {
	Inss = 0.08 * salarioBruto;
	console.log('O valor do Inss é de: R$' + Inss.toFixed(2));
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
	Inss = 0.09 * salarioBruto;
	console.log('O valor do Inss é de: R$' + Inss.toFixed(2));
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
	Inss = 0.11 * salarioBruto;
	console.log('O valor do Inss é de: R$' + Inss.toFixed(2));
} else if (salarioBruto > 5189.82) {
	Inss = 570.88;
	console.log('O valor do Inss é de: R$' + Inss.toFixed(2));
} else {
	console.log('Salário não válido');
}

salarioBase = salarioBruto - Inss;

if (salarioBase <= 1903.98) {
	console.log('Isento de imposto de renda');
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
	aliquotaIr = 0.075 * salarioBase;
	parcelaDeducao = 142.8;
	ir = aliquotaIr - parcelaDeducao;
	console.log('O valor do IR é de: R$' + ir.toFixed(2));
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
	aliquotaIr = 0.15 * salarioBase;
	parcelaDeducao = 354.8;
	ir = aliquotaIr - parcelaDeducao;
	console.log('O valor do IR é de: R$' + ir.toFixed(2));
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
	aliquotaIr = 0.225 * salarioBase;
	parcelaDeducao = 636.13;
	ir = aliquotaIr - parcelaDeducao;
	console.log('O valor do IR é de: R$' + ir.toFixed(2));
} else {
	aliquotaIr = 0.275 * salarioBase;
	parcelaDeducao = 869.36;
	ir = aliquotaIr - parcelaDeducao;
	console.log('O valor do IR é de: R$' + ir.toFixed(2));
}

salarioLiquido = salarioBase - ir;
console.log('O salário líquido é de: R$' + salarioLiquido);