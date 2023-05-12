//break y continue

//Controlan el flujo de las estructutas de control

/* 
Break= hace que el programa se rompa. Es decir, al dar una condicion hacemos que pare la ejecucion
*/

    //Ej:

const numeros= [1,2,3,4,5,6,7,8,9,0];

for(let i=0; i<numeros.length; i++){              //Creamos un arreglo en el que lo reccorremos con un ciclo "for". Dandon como condicion que si "i" es menor al valor del arreglo
    if (i===5){                                   // "i" aumente en 1
        break;
    }                                             //Creamos un condicional "if" donde "i" debe ser igual a 5, pasar al break y detener la ejecucion del programa 
    console.log(numeros[i])
};


/*
Continue= este en vez de para la ejecucion del prograama, hace que la iteracion de la condicion se omita. 
*/

    //Ej:

    for(let i=0; i<numeros.length; i++){            //Con este haremos que el numero que se encuntre en la posicion numero 5 se omita  
        if (i===5){                                  
            continue;                                //Al recorrer las posiciones sabemos que el 6 es el numero que se encuntra en la posiscion num 5 del arreglo, por ende lo omitirá
        }                                             
        console.log(numeros[i])
    };
    