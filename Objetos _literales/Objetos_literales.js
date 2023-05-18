//Objetos literales

//Nueva formad e escribir métodos y atributos,  e incluso asignarlos

    //Ej de como se haria normalmente

let nombre= "kEnAi",               //Creamos dos variables que contienen info basica de un animal
edad= 7;

const perro={                     //Creamos un objeto "perro" que contiene dos atributos y un metodo
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log("guauu")
    }
};

console.log(perro);               //Imprimimos el objeto y llamamos la funcion
perro.ladrar();


    //Ej de como se haria con objetos literales

const dog={                   //Es lo mismo pero de una forma mucho mas simplificada
    nombre,                   //Al crear los atributos, no es necesario darle valor, debido a que cuando creamos las variables dimos uno
    edad,                     
    raza:"callejero",         //Si queremos crear o agregar algo que no tenemos declarado, lo hacemos de forma normal
    ladrar(){
        console.log("guauu")  //para la funcion no es necesario decir que es una funcion
    }
}

console.log(dog);
dog.ladrar();