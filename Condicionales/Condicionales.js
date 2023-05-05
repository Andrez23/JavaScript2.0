//Condicionales

//Estrucutra de control: nos permite controlar el flujo de programacion

/* 
* If-else: es un condicional que ejecutará un loque de codigo cuando la condicion de la instruccion "if" se cumpla. Si no lo hace, se ejecutará el "else"
 */

    //Ej

let edad= 19;                                         // LO que está dentro dedl parentesis, es la condicion, es la que hará que se ejecute el "if" o el "else"

if( edad > 17){                      
    console.log("Eres mayor de edad");     
} else{
    console.log("Eres menor de edad");
}

/*
* If-esle anidados: fuciona exactamente igual al anterior. Se refiere con anidado, acuenado en nuestra condicion podemos seleccionar varias rutas de ejecucion
 */

    //Ej

let hora= 11;                                           //El if-esle nos ayuda a crear mas rutas o condicciones, en caso de que necesitemos.
 
if (hora >= 0 && hora <=5){
    console.log("Dejame dormir")
} else if(hora >= 6 && hora <= 11){
    console.log("Buenos dias")
}else if(hora >= 12 && hora <= 18){
    console.log("Buenos tardes")
}else {
    console.log("Bunas noches")                         //Para este ultmmo no es necesario el "if", ya que el programa se dara cuenta que al poner una hora que no corresponda a las 
}                                                       //condiciones anteriores pasara al else



//Operador ternario: nos sirve para condicionar una sola lina de codigo

    //Ej

    //(condicion)? verdadero : falso
let edad2 =34;

let eresMayor= (edad2 >= 18) ? "Eres mayo de edad" : "Eres menor de edad";

/*
* Switch-case: este se isa em caso de que tengamos varias opciones
*/

let dias = 5;


switch (dia) {                                               //*CASE: se llama "caso", y es cada opcion donde el valor de la variable puede caer
    case 0:                                                  //*BREAK: actua como una salida, de la estructura. Es decir, cada vez que pasa por el case, y el console.log. saldrá a 
        console.log("Domingo")                               //ejecutar el nuevo caso
        break;                                               //DEFAULT: en caso de que el calor de la variable no esté en ninguno de los "case", esta actuará com finalizador de la 
    case 1:                                                  //estructura
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;

    default:
        console.log("Ese dia no existe")
        break;
}