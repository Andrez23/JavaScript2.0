//Tipos de operadores

/*
Suma                     +                             P parentesis
Resta                    -                             E exponente
Multiplicacion           *                             M multiplicaion
Divison                  /                             D division
Porcentaje               %                             A adision
Parentesis               ()                            S sustracion                Este es el orden en el que se hacen las operaciones
 */

//Modulo (porcentaje)

let modulo = 5%2;
console.log(modulo)   //Este nos ayuad a sacar el residuo de la division


//Operadores relacionales: nos permite comparar valores

/*
mayor                    >        
menor                    <
mayor o igual            >=
menor o igual            <=
igul                     ==           //Comparacion de valores: es decir,  a pesar de qeu uno se a un string y el otro un numero, puede catalogarse como verdadero  
exactamente igual        ===          //Comparacion de tipo de dato o valor: este necesita ser exactamente igual para validar la condicion 
*/

    //Ej : Comparacion de valores

console.log("7" == 7);


    //Ej : comparacion de tipo de dato

console.log(7 ===  7); 


//Operadores de incremento o decremeto : capacidad de una variable para aumentar y disminuir su valor

//Incremento / decremento

    //Ej_1

let i = 1;
i = i +2;
console.log(i);     //Estamos haciendo que el valor de "i" aumente, porque al sumar el valor inicial de "i" + 2, nos da 3

    //Ej_2

i += 3;
console.log (i);    //Todo esto lo podemos hacer con el resto operadores aritmeticos


//operador unario: es aumento o decremento, nos ayuda a aumentar unidades

    //Ej_1

let u = 1;
u++
console.log(u)   //Este quiere decir que aumenta de 1 en 1, en este caso, esta sumando 1 al valor inical de "u"

    //Ej_2

u--
console.log(u)  //Este resta una unidad

//Operadores logicos 

/* 
! --> Not
|| --> Or
&& --> And
*/

/* ! / Not : este niega y convierte en lo contrario. Es decir, si es falso, lo convierte ne verdadero y viceversa */

    //Ej_1

console.log(!true)   //lo negará y lo convertira en "True"

/* Or / Not : cuando tengamos o mas condicones, conque una de las dos se sumpla, es decir, que sea verdadero, el Or la convierte en "true" */

    //Ej_2

console.log((9===9) || ("9"===9)) //Ya que la primera condicion es verdadera, se cumplirá la condición

/* And / && : aqui nocesitamos que las condicones se cumplan si o si*/

    //Ej_3



console.log((9===9) && ("9"===9)) //Debido a que una de las dos no se cumple nos dara como resultado "false"