let pecaRecebe = 'KING';
let peca = (pecaRecebe.toLowerCase());

switch(peca){
    case 'horse':
        console.log("'L' Movements");
        break;
    case 'tower':
        console.log("Horizontally and Vertically");
        break;
    case 'bishop':
        console.log("Diagonally");
        break;
    case 'paw':
        console.log("2 houses vertically");
        break;
    case 'queen':
        console.log("Any direction");
        break;
    case 'king':
        console.log("1 house in any direction");
        break;
    default:
        console.log("error: Not a chess piece");
}