//intro javaScript

// exercicio 1

let a = 10;
let b = 20;

let adicao = a+b;
let subtracao = a-b;
let multi = a*b;
let div = a/b;
let resto = a%b;

console.log("A soma dos números é: "+adicao);
console.log("A subração dos números é: "+subtracao);
console.log("A multiplicação dos números é: "+multi);
console.log("A divisão dos números é: "+div);
console.log("O resto da divisão dos números é: "+resto);

// exercicio 2

let a = 10;
let b = 20;

if ( b > a ) {
    console.log("Este numero e maior: " +b);
} else {
    console.log("Este numero e maior " +a);
};

// exercicio 3

let a = 10;
let b = 20;
let c = 30;

if ( a > b  && a > c ) {
    console.log("Este numero e maior: " +a);
} else if ( b > c){
    console.log("Este numero e maior: " +b);
} else {
    console.log("Este numero e maior: " +c);
};

// exercicio 4

let valor = 5;

if (valor > 0) {
    console.log("Positivo");
} else if (valor < 0) {
    console.log("Negativo");
} else {
    console.log("zero");
};

// exercicio 5

let ang1 = 45;
let ang2 = 90;
let ang3 = 20;
let soma = ang1+ang2+ang3;
let valid = true;
let notValid = false;

if (ang1 < 0){
    console.log("angulo 1 invalido");
} else if (ang2 < 0){
    console.log("angulo 2 invalido");
} else if (ang3 <0) {
    console.log("angulo 3 invalido");
} else if ( soma == 180) {
    console.log(valid);
} else {
    console.log(notValid);
};

// exercicio 6

let piece = "QUEEN"; 

switch(piece.toLowerCase()) {
    case "queen":
        console.log("Queens move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.");
        break;
    case "knight":
        console.log("Knights move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.");
        break;
    case "pawn":
        console.log("Pawns move vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. Pawns capture one square diagonally in a forward direction. Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.");
        break;    
    case "king":
        console.log("Kings move one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, know as castling.");
        break;  
    default:
        console.log("error");  
}

// exercicio 7

let percent = 85;

switch(true) {
    case (percent > 100 || percent < 0):
        console.log("error");
        break;
    case (percent >= 90):
        console.log("A");
        break;
    case (percent >= 80):
        console.log("B");
        break;
    case (percent >= 70):
        console.log("C");
        break;
    case (percent >= 60):
        console.log("D");
        break;
    case (percent >= 50):
        console.log("E");
        break;
    case (percent < 50):
        console.log("F");
        break;
    default:
        console.log("erro"); 
}

// exercicio 8

let a = 8
let b = 7
let c = 3

if (a % 2 !=0 || b % 2 !=0 || c % 2 !=0) {
    console.log(true);
} else {
    console.log(false);
}

// exercicio 9

let a = 9;
let b = 5;
let c = 3;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}

// exercicio 10

let valorCusto = 100;
let valorVenda = 180;
let isValid = true;

const imposto = 1.2;

if (valorCusto <=0 || valorVenda <= 0) {
    console.log("erro");
    isValid = false;
} else if (isValid) {
    valorCusto = valorCusto * imposto;
    let lucro = valorVenda - valorCusto;
    console.log(lucro);
}
    
//exercicio 11

let salarioBruto = 15000;
let aliquotaInss = undefined;
let descontoINSS = undefined;
let aliquotaIr = undefined;
let descontoIr = undefined;
let salarioBase = undefined;
let salarioLiquido = undefined;

console.log("Salário bruto: R$" + salarioBruto);

switch (true) {
    case (salarioBruto < 1556.94):
        aliquotaInss = 0.08;
        descontoINSS = salarioBruto * aliquotaInss;
        break;
    case (salarioBruto >= 1556.95 && salarioBruto <= 2594.92):
        aliquotaInss = 0.09;
        descontoINSS = salarioBruto * aliquotaInss;
        break;
    case (salarioBruto >= 2594.93 && salarioBruto <= 5189.82):
        aliquotaInss = 0.11;
        descontoINSS = salarioBruto * aliquotaInss;
        break;
    case (salarioBruto > 5189.82):
        aliquotaInss = "máxima";
        descontoINSS = 570.88;
}

console.log("Alíquota INSS = " + aliquotaInss + "%");
console.log("Desconto INSS = R$" + descontoINSS + "\n");

salarioBase = salarioBruto - descontoINSS;

console.log("Salário-base = R$" + salarioBase + "\n");

switch (true) {
    case (salarioBase < 1903.98):
        aliquotaIr = "isento";
        descontoIR = 0;
        break;
    case (salarioBase >= 1903.99 && salarioBase <= 2826.65):
        aliquotaIr = 0.075;
        descontoIr = (salarioBase * aliquotaIr) - 142.8;
        break;
    case (salarioBase >= 2826.66 && salarioBase <= 3751.05):
        aliquotaIr = 0.15;
        descontoIr = (salarioBase * aliquotaIr) - 354.8;
        break;
    case (salarioBase >= 3751.06 && salarioBase <= 4664.68):
        aliquotaIr = 0.225;
        descontoIr = (salarioBase * aliquotaIr) - 636.13;
    case (salarioBase > 4664.68):
        aliquotaIr = 0.275;
        descontoIr = (salarioBase * aliquotaIr) - 869.36;
}

console.log("Alíquota IR = " + aliquotaIr + "%");
console.log("Desconto IR = R$" + descontoIr + "\n");

salarioLiquido = salarioBase - descontoIr;

console.log("Salário líquido = R$" + salarioLiquido);



