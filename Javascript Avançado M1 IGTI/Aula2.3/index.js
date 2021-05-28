
function Pessoa(nome){
    if(!nome) this.nome = "Fulano";
    else this.nome = nome;

    this.dizerOla = function(){
        console.log(this.nome + " diz : Hello!");
    }
}

let pessoaA = new Pessoa("Jean");

Pessoa.digaOla = () => console.log("Hello, my name is "+ this.nome);

let pessoaB = new Pessoa("Lunara");



console.log("-------------------------------------------------------\n");


try {
    pessoaA.digaOla();
} catch (e) {
    console.log("Falha no a.digaOla");
}
try {
    pessoaB.digaOla();
} catch (e) {
    console.log("Falha no a.digaOla");
}

console.log("-------------------------------------------------------\n");


pessoaB.digaOla = function(){
     console.log("Hello, my name is "+ this.nome);
}

try {
    pessoaA.digaOla();
} catch (e) {
    console.log("Falha no a.digaOla");
}
try {
    pessoaB.digaOla();
} catch (e) {
    console.log("Falha no a.digaOla");
}

console.log("-------------------------------------------------------\n");


Pessoa.prototype.digaOla = function() {
     console.log("Hello, my name is "+ this.nome);
}
let pessoaC = new Pessoa("Ana");


console.log("-------------------------------------------------------\n");

try {
    pessoaA.digaOla();
} catch (e) {
    console.log("Falha no pessoaA.digaOla");
}
try {
    pessoaB.digaOla();
} catch (e) {
    console.log("Falha no pessoaB.digaOla");
}
try {
    pessoaC.digaOla();
} catch (e) {
    console.log("Falha no pessoaC.digaOla");
}

Pessoa.prototype.dizerOla = function() {
    console.log(this.nome + " vou dizer outro Hello")
}

pessoaB.dizerOla = function() {
    console.log(this.nome + " consigo dizer outro Hello")
}
try {
    pessoaA.dizerOla();
} catch (e) {
    console.log("Falha no pessoaA.dizerOla");
}
try {
    pessoaB.dizerOla();
} catch (e) {
    console.log("Falha no pessoaB.dizerOla");
}
try {
    pessoaC.dizerOla();
} catch (e) {
    console.log("Falha no pessoaC.dizerOla");
}