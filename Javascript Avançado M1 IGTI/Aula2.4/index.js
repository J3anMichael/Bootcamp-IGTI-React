// IIFE(Immediately Invoked Function Expression)

//SINTAXY

// ( function () { } )();

// ---------------------------------------------  



const unicoID = (function () {
    let count = 0;
    return function(){
        ++count;
        return `id_${count}`;
    };
})();

console.log(unicoID());
console.log(unicoID());
console.log(unicoID());












