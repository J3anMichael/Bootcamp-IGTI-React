//EXEMPLO CLOUSURE
function IMC(){

    let altura = 1.80;

    function calcula(){

        let peso = 70;
        console.log("IMC: "+ peso/(altura*altura));
    }

    return calcula;
}

let imc = IMC();


IMC();
console.log(IMC)

//EXEMPLO CLOUSURE ENCAPSULAMENTO
function Carro(){

    this.proprietario = 'Jean';
    let ano = 2020;

    this.getAno = function(){
        return ano;
    }

    this.setAno = function(ano){
       ano = a;
    }
}

let carro = new Carro();

console.log(carro.proprietario);
console.log(carro.ano);
console.log(carro.getAno());