let a = 60;
let b = 70;
let c = 50;
let triangulo = a + b + c;

if (triangulo === 180) {
	console.log('true');
}else if (a < 0 || b < 0 || c < 0){
    console.log('ângulo inválido');
}else{
    console.log('false');
}
