//Funciones flecha

//Es la nueva forma de definir una funcion anomima

//Sintaxis de funcion flecha

const saludar = () =>{    //Vemos que es una forma de escribir una funcion de forma maa resumida
    console.log("Hola")
};

saludar();


    //Recibir parametros

    //Ej:

const Saludar = (nombre) => {            
    console.log(`Hola ${nombre}`);
}

Saludar();

const Saludar1 = nombre => console.log(`Hola ${nombre}`);  //Cuando es un solo parametro no es necsario porner parentesis al parametro y llaves a la funcion

Saludar1();


    //Podemos recorrer un arreglo o mas bien iterarlo

const numeros=[1,2,3,4,5];                                                         //el: elemento del arreglo
                                                                                   //index: index o posicion del arreglo
numeros.forEach((el,index)=>{
    console.log(`El elemento ${el} está en la posicion ${index}`);                 //Al necesitar recorrer el arreglo lo hacemos con un ForEach. Sabemos que este recibe una funcion, 
})                                                                                 //donde recibe el elemento y la posicion del arreglo

