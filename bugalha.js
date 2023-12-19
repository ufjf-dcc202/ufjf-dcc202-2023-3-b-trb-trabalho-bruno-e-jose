export { somaColuna, jogada1, jogada2, jogada3, alocaDadoNaMatriz, girarDado, limitaColuna, tabBot, tabJogador, ptJog, ptBot, somaBot, somaJog };
import { jogarRodada, atualizaDisplay, verificaVencedor } from "./main.js";

let ptJog = [0, 0, 0];
let ptBot = [0, 0, 0];

let tabJogador = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let tabBot = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let somaJog = 0;
let somaBot = 0;
let dado;
let vez = 1;

function somaColuna(tabuleiro, Pt) {
    atualizaDisplay();
    let cont = 1;
        for (let j = 0; j < 3; j++) {
            for (let i = 0; i < 3; i++){
                if (i === 0) {
                    if (tabuleiro[i][j] === tabuleiro[i + 1][j] || tabuleiro[i][j] === tabuleiro[i + 2][j] || tabuleiro[i + 1][j] === tabuleiro[i + 2][j]) {
                        cont = 2;
                        if (tabuleiro[i][j] === tabuleiro[i + 1][j]) {
                            Pt[j] = cont * (tabuleiro[i][j] + tabuleiro[i + 1][j]) + tabuleiro[i + 2][j];
                        }
                        if (tabuleiro[i][j] === tabuleiro[i + 2][j]) {
                            Pt[j] = cont * (tabuleiro[i][j] + tabuleiro[i + 2][j]) + tabuleiro[i + 1][j];
                        }
                        if (tabuleiro[i + 2][j] === tabuleiro[i + 1][j]) {
                            Pt[j] = cont * (tabuleiro[i + 2][j] + tabuleiro[i + 1][j]) + tabuleiro[i][j];
                        }
                    }
                    if (tabuleiro[i][j] === tabuleiro[i + 1][j] && tabuleiro[i][j] === tabuleiro[i + 2][j] && tabuleiro[i + 1][j] === tabuleiro[i + 2][j]) {
                        cont = 3;
                        Pt[j] = (tabuleiro[i][j] + tabuleiro[i + 1][j] + tabuleiro[i + 2][j]) * cont;
                    }
                    if (tabuleiro[i][j] !== tabuleiro[i + 1][j] && tabuleiro[i][j] !== tabuleiro[i + 2][j] && tabuleiro[i + 1][j] !== tabuleiro[i + 2][j]) {
                        cont = 1;
                        Pt[j] = (tabuleiro[i][j] + tabuleiro[i + 1][j] + tabuleiro[i + 2][j]) * cont;
                    }
                }
                if (i === 1) {
                    if (tabuleiro[i][j] === tabuleiro[i - 1][j] || tabuleiro[i][j] === tabuleiro[i + 1][j] || tabuleiro[i - 1][j] === tabuleiro[i + 1][j]) {
                        cont = 2;
                        if (tabuleiro[i][j] === tabuleiro[i - 1][j]) {
                            Pt[j] = cont * (tabuleiro[i][j] + tabuleiro[i - 1][j]) + tabuleiro[i + 1][j];
                        }
                        if (tabuleiro[i][j] === tabuleiro[i + 1][j]) {
                            Pt[j] = cont * (tabuleiro[i][j] + tabuleiro[i + 1][j]) + tabuleiro[i - 1][j];
                        }
                        if (tabuleiro[i + 1][j] === tabuleiro[i - 1][j]) {
                            Pt[j] = cont * (tabuleiro[i + 1][j] + tabuleiro[i - 1][j]) + tabuleiro[i][j];
                        }
                    }
                    if (tabuleiro[i][j] === tabuleiro[i - 1][j] && tabuleiro[i][j] === tabuleiro[i + 1][j] && tabuleiro[i - 1][j] === tabuleiro[i + 1][j]) {
                        cont = 3;
                        Pt[j] = (tabuleiro[i][j] + tabuleiro[i - 1][j] + tabuleiro[i + 1][j]) * cont;
                    }
                    if (tabuleiro[i][j] !== tabuleiro[i - 1][j] && tabuleiro[i][j] !== tabuleiro[i + 1][j] && tabuleiro[i - 1][j] !== tabuleiro[i + 1][j]) {
                        cont = 1;
                        Pt[j] = (tabuleiro[i][j] + tabuleiro[i - 1][j] + tabuleiro[i + 1][j]) * cont;
                    }
                }
                if (i === 2) {
                    if (tabuleiro[i][j] === tabuleiro[i - 1][j] || tabuleiro[i][j] === tabuleiro[i - 2][j] || tabuleiro[i - 1][j] === tabuleiro[i - 2][j]) {
                        cont = 2;
                        if (tabuleiro[i][j] === tabuleiro[i - 1][j]) {
                            Pt[j] = cont * (tabuleiro[i][j] + tabuleiro[i - 1][j]) + tabuleiro[i - 2][j];
                        }
                        if (tabuleiro[i][j] === tabuleiro[i - 2][j]) {
                            Pt[j] = cont * (tabuleiro[i][j] + tabuleiro[i - 2][j]) + tabuleiro[i - 1][j];
                        }
                        if (tabuleiro[i - 2][j] === tabuleiro[i - 1][j]) {
                            Pt[j] = cont * (tabuleiro[i - 2][j] + tabuleiro[i - 1][j]) + tabuleiro[i][j];
                        }
                    }
                    if (tabuleiro[i][j] === tabuleiro[i - 1][j] && tabuleiro[i][j] === tabuleiro[i - 2][j] && tabuleiro[i - 1][j] === tabuleiro[i - 2][j]) {
                        cont = 3;
                        Pt[j] = (tabuleiro[i][j] + tabuleiro[i - 1][j] + tabuleiro[i - 2][j]) * cont;
                    }
                    if (tabuleiro[i][j] !== tabuleiro[i - 1][j] && tabuleiro[i][j] !== tabuleiro[i - 2][j] && tabuleiro[i - 1][j] !== tabuleiro[i - 2][j]) {
                        cont = 1;
                        Pt[j] = (tabuleiro[i][j] + tabuleiro[i - 1][j] + tabuleiro[i - 2][j]) * cont;
                    }
                }
            }
        }
        somaJog = ptJog[0] + ptJog[1] + ptJog[2];
        somaBot = ptBot[0] + ptBot[1] + ptBot[2];
        atualizaDisplay();
}

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

function verificaTabAdversario(ind, vez) {
    let casasJog = 0;
    let casasBot = 0;
    if (vez === 0) {
        somaColuna(tabJogador, ptJog);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (tabJogador[i][ind] === tabBot[j][ind]) {
                    ptBot[ind] = ptBot[ind] - tabBot[j][ind];
                    tabBot[j][ind] = 0;
                }
            }
        }
    }
    if (vez === 1) {
        somaColuna(tabBot, ptBot);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (tabBot[i][ind] === tabJogador[j][ind]) {
                    ptJog[ind] = ptJog[ind] - tabJogador[j][ind];
                    tabJogador[j][ind] = 0;
                }
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabJogador[i][j] === 0) {
                continue;
            }
            else {
                casasJog++;
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabBot[i][j] === 0) {
                continue;
            }
            else {
                casasBot++;
            }
        }
    }
    if ((casasJog === 9) || (casasBot === 9)) {
        somaColuna(tabJogador, ptJog);
        somaColuna(tabBot, ptBot);
        verificaVencedor(somaJog, somaBot);
        return;
 }
    else {
        somaColuna(tabJogador, ptJog);
        somaColuna(tabBot, ptBot);
        vezDaJogada();
    }
}

function vezDaJogada() {
    if (vez === 0) {
        vez = 1;
    }
    else {
        vez = 0;
    }
    somaColuna(tabJogador, ptJog);
    somaColuna(tabBot, ptBot);
    jogarRodada(vez);
}

function jogada1() {
    alocaDadoNaMatriz(0, 0);
}

function jogada2() {
    alocaDadoNaMatriz(0, 1);
}

function jogada3() {
    alocaDadoNaMatriz(0, 2);
}