
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

function alocaDadoNaMatriz(vez, ind) {
    let i = 0;
    if (vez === 0) {
        somaColuna(tabJogador, ptJog);
        for (i = 0; i < 3; i++) {
            if (tabJogador[i][ind] !== 0) {
                continue;
            }
            else {
                break;
            }
        }
        if (i >= 3) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if (tabJogador[j][k] === 0) {
                        tabJogador[j][k] = dado;
                        break;
                    }
                    break;
                }
                break;
            }
        }
        else {
            tabJogador[i][ind] = dado;
        }
    }
    if (vez === 1) {
        somaColuna(tabBot, ptBot);
        for (i = 0; i < 3; i++) {
            if (tabBot[i][ind] !== 0) {
                continue;
            }
            else {
                break;
            }
        }
        if (i >= 3) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if (tabBot[j][k] === 0) {
                        tabBot[j][k] = dado;
                        break;
                    }
                    break;
                }
                break;
            }
        }
        else {
            tabBot[i][ind] = dado;
        }
    }
    verificaTabAdversario(ind, vez);
}
