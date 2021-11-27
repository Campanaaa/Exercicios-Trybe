const valorCusto = 13.80; 
const valorVenda = 18.89;
const impostoSobreCusto = 0.20 * valorCusto;
let lucro;
let lucroMil;

valorCustoTotal = valorCusto + impostoSobreCusto;

lucro = valorVenda -valorCustoTotal;
lucroMil = lucro * 1000

console.log('R$ ' + lucroMil.toFixed(2));