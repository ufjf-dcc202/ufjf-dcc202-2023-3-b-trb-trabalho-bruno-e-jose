export { jogarRodada, atualizaDisplay, verificaVencedor };
import { somaColuna, jogada1, jogada2, jogada3, alocaDadoNaMatriz, girarDado, limitaColuna, tabBot, tabJogador, ptJog, ptBot, somaBot, somaJog } from "./bugalha.js";

let b1 = document.querySelector("#btn1");
let b2 = document.querySelector("#btn2");
let b3 = document.querySelector("#btn3");
let b4 = document.querySelector("#btn4");
let b5 = document.querySelector("#btn5");
let b6 = document.querySelector("#btn6");
let b7 = document.querySelector("#btn7");
let b8 = document.querySelector("#btn8");
let b9 = document.querySelector("#btn9");
let b10 = document.querySelector("#btn10");
let b11 = document.querySelector("#btn11");
let b12 = document.querySelector("#btn12");
let b13 = document.querySelector("#btn13");
let b14 = document.querySelector("#btn14");
let b15 = document.querySelector("#btn15");
let b16 = document.querySelector("#btn16");
let b17 = document.querySelector("#btn17");
let b18 = document.querySelector("#btn18");
let botoes = [[b1, b2, b3], [b4, b5, b6], [b7, b8, b9]];

let displayPtJog = [document.querySelector("#ptjog1"), document.querySelector("#ptjog2"), document.querySelector("#ptjog3")];
let displayPtBot = [document.querySelector("#ptbot1"), document.querySelector("#ptbot2"), document.querySelector("#ptbot3")];

let displayJog = [[b1, b2, b3], [b4, b5, b6], [b7, b8, b9]];
let displayBot = [[b10, b11, b12], [b13, b14, b15], [b16, b17, b18]];
let displaySoma = document.querySelectorAll('h4');
let displayDado = document.querySelector('h3');
let arrayJogadas = [jogada1, jogada2, jogada3];

function verificaVencedor(somaJog, somaBot){
    somaColuna(tabJogador, ptJog);
    somaColuna(tabBot, ptBot);
    if(somaJog > somaBot){
        displayDado.innerHTML = "FIM DE JOGO! PLAYER1 VENCEU!";
    }
    if (somaJog === somaBot){
        displayDado.innerHTML = "EMPATE?!?!?!? COMO VOCÊ CONSEGUIU ?!?!?!";
    }
    if (somaJog < somaBot){
        displayDado.innerHTML = "FIM DE JOGO! PLAYER2 VENCEU!";
    }
    console.log(somaJog);
    console.log(somaBot);
    for (let i =0; i<3; i++){
        for (let j =0; j<3; j++){
            botoes[i][j].disabled = true;
        }
    }
}

function randomizaDado(){
    let dado = girarDado();
    displayDado.innerHTML = dado;
    return dado;
}

function atualizaDisplay(){
    for (let i = 0; i < 3; i++){
        for (let j =0; j < 3; j++){
            displayBot[i][j].innerHTML = tabBot[i][j];
            displayJog[i][j].innerHTML = tabJogador[i][j];
            displayPtJog[j].innerHTML = ptJog[j];
            displayPtBot[j].innerHTML = ptBot[j];
        }
        displaySoma[1].innerHTML = somaBot;
        displaySoma[0].innerHTML = somaJog;
    }
}

function jogarRodada (vez){
    atualizaDisplay();
    if (vez === 1){
        atualizaDisplay();
        randomizaDado();
        let indice = limitaColuna();
        alocaDadoNaMatriz (vez, indice);
        atualizaDisplay();
    }
    if (vez === 0){
        randomizaDado();
        for (let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                botoes[i][j].addEventListener("click",arrayJogadas[j]);
            }
        }
    }
}

jogarRodada(1);