//Template Strings

//Concatenacion: es la unidad de dos cadenas de caracteres

let nombre= "Andres";
let apellido= "Marin"
let saludo= "Hola, mi nombre es" + nombre + " " + apellido;

console.log(saludo);

/*NOTA: esto no es tan recomendable*/


//Interpolacion de varibales: es un uso mas practico. Ademas, para poder usar necesitamso "Template String"

let saludo2=`Hola, mi nombre es ${nombre} ${apellido}.`;

console.log(saludo2);