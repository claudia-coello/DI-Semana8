const prompt = require("prompt-sync")();//sirve para promp en node

// //Páginas: 28
// console.log("IF-ELSE anidado. Página: 28")
// let edad = 70;
// if (edad < 18) {
//     console.log("Es menor de edad")
// }else{
//     if(edad<69){
//         console.log("Eres adulto")
//     }else{
//         console.log("Eres un adulto mayor")
//     }
// }

// edad = parseInt(prompt("Ingrese su edad: "))
// if (edad < 18) {
//     console.log("Es menor de edad")
// }else{
//     if(edad<69){
//         console.log("Eres adulto")
//     }else{
//         console.log("Eres un adulto mayor")
//     }
// }

// //Páginas: 29
// console.log("IF-ELSE anidado. Página: 29")
// let nota = parseFloat(prompt("Ingrese una nota del uno al diez: "))

// if (nota <= 4 && nota >= 1) {
//     console.log("Insuficiente")
// } else if (nota <= 6 && nota >= 5) {
//     console.log("Regular")
// }else if (nota <= 8 && nota >= 7) {
//     console.log("Bueno")
// }else if (nota <= 10 && nota >= 9) {
//     console.log("Excelente")
// }else {
//     console.log("Nota Invalida")
// }

// // Páginas:30
// console.log("Switch. Página: 30")
// let tipoFruta=prompt("Ingrese el tipo de fruta(Narajas, Manzanas, Fresas): ")
// switch (tipoFruta) {
//     case "Naranjas":
//         console.log("Las Narajas cuestan $5")
//         break;
//     case "Manzanas":
//         console.log("Las Manzanas cuestan $10")
//         break;
//     case "Fresas":
//         console.log("Las Fresas cuestan $15")
//         break;
//     default:
//         console.log("No tenemos esa fruta", tipoFruta)
//         break;
// }

// // Páginas:31
// console.log("SWITCH. Página: 31");
// let numUno = parseInt(prompt("Ingrese un numero entero: "));
// let numDos = parseInt(prompt("Ingrese un numero entero: "));
// console.log("1. Suma");
// console.log("2. Resta");
// console.log("3. Multiplicacion");
// console.log("4. Division");
// console.log("5. Modulo");
// console.log("6. Potencia");

// let opcionOperciones = parseInt(prompt("Ingrese una opción (1-6): "));

// switch (opcionOperciones) {
//     case 1:
//         console.log("Suma: ", numUno + numDos);
//         break;
//     case 2:
//         console.log("Resta: ", numUno - numDos);
//         break;
//     case 3:
//         console.log("Multiplicacion: ", numUno * numDos);
//         break;
//     case 4:
//         console.log("Division: ", numUno / numDos);
//         break;
//     case 5:
//         console.log("Modulo: ", numUno % numDos);
//         break;
//     case 6:
//         console.log("Potencia: ", numUno ** numDos);
//         break;
//     default:
//         console.log("Error. Opcion no encontrada");
//         break;
// }

// // Páginas:32
// console.log("WHILE y DO-WHILE. Página: 32");
// let i = 0;
// let sumaVector = 0;
// let v = [1, 2, 3 , 4];
// while (i < v.length) {
//     sumaVector += v[i];
//     i++;
// }
// console.log(sumaVector);

// // Páginas:34
// console.log("WHILE y DO-WHILE. Página: 34");
// do {
//     let numUno = 0;
//     let numDos = 1;
//     console.log("Que operacion desea hacer?");
//     console.log("1.Suma");
//     console.log("2.Resta")
//     console.log("3.Multiplicacion");
//     console.log("4.Division");
//     console.log("5.Modulo");
//     console.log("6.potencia");
//     console.log("0.Salir");
//     opc=parseInt(prompt("Elija una opcion: "));

//     if (opc != 0) {
//         numUno = parseInt(prompt("Ingrese un numero entero: "));
//         numDos = parseInt(prompt("Ingrese un numero entero: "));
//     }
    
//     switch (opc) {
//         case 0:
//             console.log("Saliendo..");
//             break;
//         case 1:
//             console.log("Suma: ", numUno + numDos);
//             break;
//         case 2:
//             console.log("Resta: ", numUno - numDos);
//             break;
//         case 3:
//             console.log("Multiplicacion: ", numUno * numDos);
//             break;
//         case 4:
//             if (numDos == 0) {
//                 console.log("Division imposible. Divisor igual a 0.");
//             } else {
//                 console.log("Division: ", numUno / numDos); 
//             }
//             break;
//         case 5:
//             console.log("Modulo: ", numUno % numDos);
//             break;
//         case 6:
//             console.log("Potencia: ", numUno ** numDos);
//             break;
//         default:
//             console.log("Error. Opcion no encontrada");
//             break;
//     }
// } while (opc!=0);

// // Páginas: 35
// console.log("WHILE y DO-WHILE. Página: 35")
// let result = '';
// let i = 0;

// do {
//     i += 1;
//     result += i;
// } while (i < 5);

// console.log(result);

// // Páginas: 36
// console.log("WHILE y DO-WHILE. Página: 36 Parte 1")
// let suma = 0;
// let continuar = "";
// do {
//     let num = parseFloat(prompt("Ingrese un numero: "));
//     continuar = prompt("Desea continuar?(si/no): ").toLowerCase();
//     suma += num;
//     while (continuar !== "si" && continuar !== "no") {
//         console.log("Error. Por favor ingrese si o no.");
//         continuar = prompt("Desea continuar?(si/no): ").toLowerCase();
//     }
// } while (continuar === "si");
// console.log("La suma es: ", suma);

// console.log("WHILE y DO-WHILE. Página: 36 Parte 2");
// let password = "";
// let ingreso = "";
// do {
//     password = prompt("Establezca su contrasena: ");
//     if (password.length < 6) {
//         console.log("Error.La contrasena debe tener almenos 6 caracteres.");
//     }
// } while (password.length < 6);
// do {
//     ingreso = prompt("Ingrese su contrasena: ");
//     if (ingreso !== password) {
//         console.log("Error. Las contrasenas no coinciden, vuelva a intentarlo")
//     }
// } while (ingreso !== password);

// //Paginas: 37
// console.log("FOR. Página: 37 Parte 1");
// const pasos = 5;
// for (let paso = 0; paso <= pasos; paso++) {
//     console.log("Estoy dando el siguiente paso: " + paso);
// }

// let sumaVector = 0;
// let v = [1,2,3,4];
// for (let i = 0; i < v.length; i++) {
//     sumaVector = v[i];
// }
// console.log("Suma vector: ", sumaVector);


// // Páginas: 38
// console.log("FOR. Página: 38 Parte 1");
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// console.log("FOR. Página: 38 Parte 2");
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }

// console.log("FOR. Página: 38 Parte 3");
// let sumaTotal = 0;
// for (let i = 1; i <= 100; i++) {
//     sumaTotal += i;
// }
// console.log("La suma del 1 al 100 es: ", sumaTotal);

// console.log("FOR. Página: 38 Parte 4");
// let sumaNumeros = 0;
// for (let i = 1; i <= 5; i++) {
//     let numero = parseFloat(prompt("Ingrese el numero " + i + ": "));
//     sumaNumeros += numero;
// }
// let promedio = sumaNumeros / 5;
// console.log("El promedio es: ", promedio);

// console.log("FOR. Página: 38 Parte 5");
// let tabla = parseInt(prompt("Ingrese el numero de la tabla que desea ver: "));
// for (let i = 1; i <= 10; i++) {
//     console.log(tabla + " x " + i + " = " + (tabla * i));
// }

// console.log("FOR. Página: 38 Parte 6");
// let palabra = prompt("Ingrese una palabra: ").toLowerCase();
// let contadorVocales = 0;
// for (let i = 0; i < palabra.length; i++) {
//     if (palabra[i] === 'a' || palabra[i] === 'e' || palabra[i] === 'i' || palabra[i] === 'o' || palabra[i] === 'u') {
//         contadorVocales++;
//     }
// }
// console.log("La palabra tiene " + contadorVocales + " vocales");

// console.log("FOR. Página: 38 Parte 7");
// let sumaPositivos = 0;
// let contador = 0;
// for (let i = 0; i < 10; i++) {
//     let num = parseFloat(prompt("Ingrese un numero positivo: "));
//     if (num < 0 || isNaN(num)) {
//         console.log("Error. Ingrese solo numeros positivos.");
//         i--;
//     } else {
//         sumaPositivos += num;
//         contador++;
//     }
// }
// console.log("La suma total es: ", sumaPositivos);

// console.log("FOR. Página: 38 Parte 8");
// let texto = prompt("Ingrese un texto: ");
// let textoInvertido = "";
// for (let i = texto.length - 1; i >= 0; i--) {
//     textoInvertido += texto[i];
// }
// console.log("Texto invertido: ", textoInvertido);

// // Páginas: 39
// console.log("FOR. Página: 39");
// let palabraContar = prompt("Ingrese una palabra: ").toLowerCase();

// let letras = {};//es un objeto pero lo usuaremos como si fuera un diccionario, letras{"a": 1, "b": 2...}
// for (let i = 0; i < palabraContar.length; i++) {
//     let letra = palabraContar[i];
//     if(letras[letra]){//funciona como un diccionario, busca en letras una clave igual a la letra de la palabra en ese ciclo
//         //si la letra es "a" buscara en letras una clave con valor de "a", letras["a"]
//         letras[letra]++;//si la encontro aumentara su valor en uno
//     }else{
//         letras[letra] = 1;//si no la encuentra inicializa un elemento con el valor de uno
//     }
// }
// console.log(letras);

// // Páginas: 40
// console.log("BUCLES ANIDADOS. Página: 40 Parte 1");
// let numeroPalindromo;
// let original;
// let invertido = 0;
// do {
//     numeroPalindromo = parseInt(prompt("Ingrese un numero para verificar si es palindromo: "));
//     original = numeroPalindromo;
//     invertido = 0;
//     while (numeroPalindromo > 0) {
//         let digito = numeroPalindromo % 10;
//         invertido = invertido * 10 + digito;//hace "un espacio" donde colocar el nuevo digito y luego le suma ese digito 1->10->13
//         numeroPalindromo = Math.floor(numeroPalindromo / 10);//redondea el numero hacia el entero menor o igual: 5.33->5, para evitar tener numeros decimales
//     }
//     if (original === invertido) {
//         console.log("El numero " + original + " es un palindromo");
//     } else {
//         console.log("El numero " + original + " no es un palindromo");
//     }
// } while (false);

// console.log("FOR ANIDADO. Página: 40 Parte 2");
// let numeroMultiplos = parseInt(prompt("Ingrese un numero para ver sus multiplos: "));
// for (let i = 1; i <= 10; i++) {
//     console.log(numeroMultiplos + " x " + i + " = " + (numeroMultiplos * i));
// }

// console.log("FOR ANIDADO. Página: 40 Parte 3");
// let tamano = parseInt(prompt("Ingrese el tamano del cuadrado: "));
// for (let i = 0; i < tamano; i++) {//hace las filas
//     let linea = "";//empieza vacio
//     for (let j = 0; j < tamano; j++) {//hace las columnas
//         linea += "* ";//le agrega un * 
//     }
//     console.log(linea);//imprime la linea
// }

// console.log("FOR ANIDADO. Página: 40 Parte 4");
// let altura = parseInt(prompt("Ingrese la altura del triangulo: "));
// for (let i = 0; i <= altura; i++) {//hace la fila con la altura indicada
//     let linea = "";
//     for (let j = 0; j < i; j++) {//crece hasta donde i esta, para hacer el efecto de crecimiento, si i=2 j ira j=0, j=1, j=2 y en cda uno agrega un asterisco
//         linea += "* ";
//     }
//     console.log(linea);//imprime la linea con asteriscos
// }
