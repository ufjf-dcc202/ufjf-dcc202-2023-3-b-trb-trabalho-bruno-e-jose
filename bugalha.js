
let ptJog = [0, 0, 0];
let ptBot = [0, 0, 0];

let tabJogador = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let tabBot = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let somaJog = 0;
let somaBot = 0;
let dado;
let vez = 1;

function girarDado() {
    return dado = Math.floor(Math.random() * 6) + 1;
}

function limitaColuna() {
    let indice = Math.floor(Math.random() * 3);
    return indice;
}
