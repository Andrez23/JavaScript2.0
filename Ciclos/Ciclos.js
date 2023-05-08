//Ciclos o buqles

//Ofrecen una forma rapida y sencilla de hacer algo repetidamente.Principalmente, repiten lo mismo varias veces.

/*
While: ejecuta sus instrucciones que una condicion espedificada se evalue como "true"

Aspecto:                                                -Si la condicion se vuelve "false", la instruccion dentro del buqle se deja de ejecutar y el control pasa a la instruccion que 
        While(condicion)                                 sigue el buqle
            expresion
*/
    //Ej:

let contador= 0;

while(contador < 10){                                     // While significa "mientras"
    console.log(contador);                                //Estamos dando una condicion en la que el contador sea menor a 10, entonces mostratá el contador en pantalla
    contador++;                                           //y sumará 1. Asi hasta que la condicion no se cumpla
}


/*
Do-While: se repite hasta que una condicion especificada se vuelve como falsa
                               
Aspecto:                                                   -Este siempre se ejecuta una vez, antes de evaluar la condicion. 
        do                                                 -Si la condicion es "true",la declaracion se ejecuta de nuevo. Al final de cada ejercicio, se comprueba la condicion
            expresion
        While(condicion)                                   *Ademas este funciona parecido al while, pero con cambio   
*/

    //Ej:

let contador2= 0;

do{
    console.log(contador);
    contador2++;
}while(contador2 < 10);

/*
For: este se repite hasta que una condicion especifica se evalue como "false"

Aspecto:
        for(inicializacion de variable; condicion; decremento o incremento){
            sentencia que se ejecuta
            sentencia que se ejecuta
        }
*/

        //Ej:
                                                            // "i" es index,auqnue podemos nombrar nuestra variable de cualqueir forma
for(let i= 0; i < 10; i++ ){                                //Estamos diciendo que "i" equivale a 0, donde "i" si es menor a 10
    console.log(i);                                         //entonces "i" se le sumará 1, hasta que la condicion ya no se cumpla
}