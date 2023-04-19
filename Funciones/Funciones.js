//Funciones
/*Son un bloqeu de codigo que realiza alguna operacion. Esta puede definir parametros de entrad que permiten a los llamados aargumentos a la funcion. Y tambien, puede devolver un valor como una salida. Ademas de que en JS, se consideran objetos*/

//Funciones declaradas
/*-Usamos la palabra reservada ""function"
  -Siempre lleva parentesis
  -Y sus llaves(donde irá el cuerpo de la funcion)
   Ej */

function estoEsUnaFuncion() {                      //La funcion siempre lleva un nombre, en este caso es: "estoEsUnaFuncion"
    console.log("Uno");                            //Ademas, todo lo qeu hay dentro, se ejecuta al unisono
    console.log("Uno");                            
    console.log("Uno");
}


estoEsUnaFuncion(); //Esto es la invocacion de la función. Se usa para llamarla y que se ejecute

/*Return: este nos sirve para retonar varlores de las funciones
  Ej */

function unaFuncionQueDevulveValor(){
    return 19;
}

/*NOTA: aunque si ponemos console.log, despues de el "return", ese nos se ejecutara.Aunque cualquier cosa que tengamos antes del "return", lo mostrra en pantalla de forma normal
  Ej */

  function unaFuncionQueDevulveValor(){
    return 19;
    return 20;  // por eso nos aparece oscuro
}


//Una funcion tambien puede aceptar parametros

function saludar (nombre, edad){
    console.log(`Hola, mo nombre es ${nombre} y tengo ${edad} años`)
}

    saludar("Andres",19); //Cuando invocamosla funcion, aqui es odonde le damos los datos a los parametros(que son los aprentesis que son datos a recibir)

//Funcion expresada

/*Es una funcion dentro de una variable 
 Ej */

const funcionExpresada =function(){                 // Aquí se usa principalmente "const"
    console.log("Holi")                             // NO es necesario ponerle nombre a la funcion, debido a que con el nombre de la constante es suficiente(se les llama "funcion
}                                                   // aonima")

funcionExpresada();

