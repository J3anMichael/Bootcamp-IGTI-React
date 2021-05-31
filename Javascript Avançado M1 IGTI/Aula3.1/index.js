//EXEMPLO 1 - PARA CRIACAO DE PROMISE E EXECUCAO

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success P1"), 2000)
});


p1.then((res) => { console.log(res) }, (rej) => { });

new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success P1"), 2000)
}).then((res) => { console.log(res) }, (rej) => { });

//EXEMPLO 2 - CRIACAO DE PROMISE E O USO DO CATCH

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success P2"), 2000)
});

p2.then((res) => { console.log(res) });
p2.catch((rej) => { })

p2.then((res) => { console.log(res) }).catch((rej) => { })


//EXEMPLO 3 - 

const p3 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5){
        resolve("Success P3")

    } else {
 
        reject("Failed P3")
    }    
})

p3.then(console.log).catch(console.error);


//EXEMPLO 4 -


const p4 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5){
        resolve("Success P3")

    } else {
 
        reject("Failed P3")
    }    
})

p4.then( function acao1 (res) { console.log(`${res} da acao 1`); return res})
.then( function acao2 (res) { console.log(`${res} da acao 2`); return res})
.then( function acao3 (res) { console.log(`${res} da acao 3`); return res})
.catch( function erro(rej) { console.error(rej)})


//EXEMPLO 5 -  ENCADEAMENTO DE CATCHs 

const p5 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5){
        resolve("Success P5")

    } else {
 
        reject("Failed P5")
    }    
})

p5.then( function acao1 (res) { console.log(`${res} da acao 1`); return res})
.catch( function erro1 (rej) {console.error('Erro primeiro catch'); return rej})
.then( function acao2 (res) { console.log(`${res} da acao 2`); return res})
.then( function acao3 (res) { console.log(`${res} da acao 3`); return res})
.catch( function erro(rej) { console.error(rej)})


//EXEMPLO 6 - ENCADEAMENTO DE CATCHs DIRETAMENTO A PRIMEIRA PROMISE, OS DOIS SAO EXECUTADOS


const p6 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5){
        resolve("Success P6")

    } else {
 
        reject("Failed P6")
    }    
})

p6.catch( function erro1(rej) { console.error('Erro no primeiro catch'); return rej})
p6.catch( function erro2(rej) { console.error(rej)})

p6.then( function acao1 (res) { console.log(`${res} da acao 1`); return res})
.then( function acao2 (res) { console.log(`${res} da acao 2`); return res})
.then( function acao3 (res) { console.log(`${res} da acao 3`); return res})


//EXEMPLO 7 -

const p7 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5){
        resolve("Success P7")

    } else {
 
        reject("Failed P7")
    }    
})

p7.catch( function erro1(rej) { console.error('Erro no primeiro catch P7'); return rej})

p7.then( function acao1 (res) { console.log('Promessa rejeitada P7 na acao1'); throw new Error('Error')})
.catch(function erro2(rej) {console.error('Tratamento das rejeicoes em P7 ou acao1'); return rej})
.then(function acao2(res) { console.log(`${res} da acao 2`); return res})
.then(function acao2(res) { console.log(`${res} da acao 3`); return res})
.catch(function erro3(rej) {console.error('Tratamento das rejeicoes em acao2 e acao3')})