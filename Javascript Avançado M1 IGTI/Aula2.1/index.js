
//ESCOPO DE BLOCO
if (true) {
    const message = "Hello";

}
//console.log(message); //ReferenceError: message is not defined

for (const color of ['verde', 'vermelho', 'amarelo']) {

    const message = "Hello"
    console.log(color);
    console.log(message);
}


//EXEMPLO DE ESCOPO BLOCO COM VAR POREM SERA ESCOPO GLOBAL
if (true) {
    var count = 0; console.log(count);
}
var count = 0; console.log(count);



//EXEMPLO DE ESCOPO LOCAL COM VAR
function executar() {
    var message = "Escopo local com VAR";
    console.log(test);
}
executar();
//console.log(text); //ReferenceError: text is not defined


//EXEMPLO DE ESCOPO LOCAL LET E CONSTA
function executar2() {
    let txt = 0;
    const test = "2"

    function executar3() { };

    console.log(txt);
    console.log(test);
    console.log(executar3)
}

executar2();

//console.log(txt); //ReferenceError: txt is not defined
//console.log(test); //ReferenceError: test is not defined
//console.log(executar3) //ReferenceError: executar3 is not defined



//ESCOPO ANINHADO

function executar3() {

    const txt = 'Escopo aninhado';

    if(true) {

        const name = 'Carro';
        console.log(txt);
    }

    console.log(name);
}

executar3();


//EXEMPLO ESCOPO GLOBAL 


let gName = "Jean";

console.log(gName);

//EXEMPLO HOISTING

function printName() {

    console.log("Nome: "+gName);
}