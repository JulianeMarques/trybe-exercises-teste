const name = "Juliane";
const birthCity = "Santos";
const birthYear = 1988;

console.log(name, birthCity, birthYear);

let base = 5;
let altura =8;

console.log(base * altura);

let nota = 67;

if (nota >= 80) {
    console.log("Aprovado");
}
else if (nota <= 80 && nota >= 60) {
    console.log("lista de espera");
}
else {
    console.log("reprovado");
}

//switch/case

let trafficLight = "vermelho";

switch (trafficLight) {
    case "vermelho":
        console.log("pare");
        break;

    case "vamerelo":
        console.log("atencao");
        break;

    case "verde":
        console.log("psiga");
        break;

    default:
        console.log("valor nao identificado");

}