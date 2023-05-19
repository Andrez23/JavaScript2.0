//Parametros REST y opreador spread

//Parametros REST: forma de agregar virtuelamente parametrso infinitos. ya sea a una funcoin o dentro de una variable

    //Ej:

function sumar(a,b,...c){         
    let resultado= a+b

    c.forEach(function(n){
        resultado+= n
    }
)}

console.log(sumar(1,2));
console.log(sumar(1,2,3));


//Operador Spread: nos permite agregar o fusionar elementos en este caso en un arreglo

    //Ej:

const arr1=[1,2,3,4,5],                //Estamso creando 2 arreglos y luego imprimimos 
      arr2=[6,7,8,9,0];

console.log(arr1,arr2);

const arr3=[...arr1,...arr2];          //En este caso, tambien s eanteponen los punto ssuspensivos en los elementos de arreglo.Esto nos permite fusionar los elementos del arreglo
console.log(arr3);

