//Destructuracion

//Es una nueva forma de asignar valores a objetos y arreglos

    //Ej:,
        //Arreglos

const numeros =[1,2,3];

    //Sin destructuracion:

    let uno= numeros[0],            //Estamos guardando en cada variable, los valores y posicion del arreglo
    dos= numeros[1],
    tres= numeros[2];

    console.log(uno, dos, tres);   //Imprimimos los valores del arreglo


    //Con destructuracion

    const[one,two,three]= numeros;        //En cada posicion del arreglo se está guardando en la varibale "one, two y three"
    console.log(one,two,three);          


//Tambien nos sirve para los objetos

const persona={                //Creamos el objeto persona que contiene las propiedades de "nombre, apellido y edad"
    nombre: "Andres",
    apellido: "marín",
    edad: 20
};

    //Con destructuracion

    let {nombre,apellido,edad}=persona;  //En el objeto persona estamos guardadno cada una de las propiedades y su valor. Donde, despus pasamos a imprimir en pantalla
    console.log(nombre,apellido,edad);