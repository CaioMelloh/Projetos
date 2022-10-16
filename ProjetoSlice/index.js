let string = prompt("Passe um nome para podermos dividi-lo em dois!");

function dividindoStringsAoMeio(string){

    let response = string.length;

    response = Math.floor(response / 2);

    if(string.length % 2 != 0){
        response++;
    }

    let resultado1 = string.slice(response);

    let resultado2 = string.slice(0, response);

    return resultado2 + " | " + resultado1;

}

let palavra = document.getElementById("palavra");
palavra.innerHTML = string;

let variavel = document.getElementById("escolhido");
variavel.innerHTML = dividindoStringsAoMeio(string);

console.log(dividindoStringsAoMeio(string)); 

