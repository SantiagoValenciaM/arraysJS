let numbers = [2,5,6,7,3,10];
const letters = ["a","b","c","d","e"];

// inmutable - no altera el valor 
const algebra = numbers.concat(letters);
showDom("array2",letters);


// mutable - altera su valor
// agrega 1 elemento mas al array
numbers.push(11);
// agrega 1 elemento al inicio del array
numbers.unshift(1);
// agregar un elemento entre otros en un array
// puede eliminar elementos y seleccionas la posicion en la que quieras que se ponga
numbers.splice(2,0,3);

// elimina el ultimo elemento y regresa el elemento en donde quieras registrarlo
let n = numbers.pop();
console.log(n);
// elimina el primer elemento y lo regresa en otra variable
let n2 = numbers.shift();
console.log(n2);

show(numbers);
showDom("array1",numbers);




function show(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

function showDom(element, arr) {
    document.getElementById(element).innerHTML = "";
    
    for(let i=0; i<arr.length; i++){
        document.getElementById(element).innerHTML +=
        `<div>${arr[i]}<div>`;
    }
}