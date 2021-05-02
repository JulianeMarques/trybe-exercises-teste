// exercicio 1

let n = 5;
let symbol = '*';
let linhas = ''

for (let index = 0; index < n; index +=1) {
    linhas = linhas + symbol;
};

for (let index = 0; index < n; index += 1) {
    console.log(linhas);
};

// exercicio 2

let size = 5;
let symbol = '*';
let linhas = '';

for (let index = 0; index <= size; index += 1) {
    console.log(linhas);
    linhas = linhas + symbol;
}

// exercicio 3

let size = 5;
let symbol = '*';
let linhas = '';
let posicao = size;


for (let index = 0; index <= size; index += 1) {
    for (let indexColuna = 0; indexColuna <= size; indexColuna +=1 ) {
        if (indexColuna < posicao) {
            linhas = linhas + ' ';
        } else {
            linhas = linhas + symbol;
        }
    }
    console.log(linhas);
    linhas = '';
    posicao -= 1;
}

// exercicio 4

