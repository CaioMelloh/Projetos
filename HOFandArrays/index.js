function arrayDeNomes(nameqt, writeAName){
    let nomes = new Array();
    let quant = nameqt();
    for(let i = 0; i< quant; i++){
        nomes[i] = writeAName();
    }
    return nomes;

};

let variable = function(){
    let name = prompt("Write a name: ");
    return name;
}

let question = () => {
    let response = prompt("Digite a quantidade de nomes que quer inserir: ");
    return parseInt(response, 10);
}

    let ident = function (array){
        return array.map(function(t){ return t + ", "});
    }


let nome = arrayDeNomes(question, variable);
console.log(ident(nome));

