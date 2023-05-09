//Manejo de errores

//Estructura que nos permitira evaluar fragmentos de codigo. Es la estructura "try", "catch" y "finally"

    //Ej:

try{
    console.log("En el try se agrega el codigo a evaluar");                                 //try: evalua nuestro codigo
}catch(error){                                                                              //catch: en caso de que el "try "haya un error, pasará a la parte del catch
    console.log("este captura cualquier error surgido o lanzado en try");                   //finally: haya un error o no, siempre se ejecutará al final del try-catch
}finally{
    console.log("Este fragmento se ejecuta siempre al fnal del try-catch");
}