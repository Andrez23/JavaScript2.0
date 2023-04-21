//Arreglos(Arrays)

//Sintaxis de una arreglo

const b = [1, true, "Hola"];                                     //b = nombre del arreglo    
/*Podemos declarar con const, debido a que, hayan cambios        // [...] = elementos del arreglo
se puede seguir definifendo como un arreglo*/                    //Posiciones = las posiciones siempre empiezan desde 0

console.log(b) //Con esto imprimimos todo el arreglo.
console.log(b[0]) //Aqui estamos mandando a imprimir la posicion 0 del arreglo, que en este caso el 1


//Otra forma de crear arreglos

const c= Arrar.of("x", "y", "z", 9,8,7)          // El .of, es el metodo
console.log(c) 

//Metodos

//.fill
const d= Array(100).fill(false)                  //El 100 rerefiere a la cantidad de elementos que queremos en el arreglo
console.log(d)                                   //El .fil, nos permite inicializar todos los elementos , en lo que  nosotros deseemos. En este caso queremos llenar los 100 elementos con la palabra "false"

//.Push
const colores= ["Rojo", "Verde", "Azul"];

colores.push("Negro");                           //El .push, nos permite añadir un nuevo elemento, aunque siempre lo pondra de ultimo 

//.Pop
                                                 //Este, elimina el ultimo elemento