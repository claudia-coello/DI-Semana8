const prompt = require("prompt-sync")();//sirve para promp en node

// // Páginas: 46
// //Revisar index.html

// // Páginas: 48
// console.log("STRINGS. Página: 48");
// let cadena = "Hola Mundo";
// console.log("Longitud: " + cadena.length);
// console.log("Subcadena: " + cadena.substring(0, 4));
// console.log("Mayusculas: " + cadena.toUpperCase());
// console.log("Concatenar: " + cadena.concat(" JavaScript"));
// console.log("Dividir: " + cadena.split(" "));
// console.log("Indice de Mundo: " + cadena.indexOf("Mundo"));
// console.log("Slice: " + cadena.slice(0, 4));
// console.log("Reemplazar: " + cadena.replace("Mundo", "JavaScript"));
// console.log("Incluye Hola: " + cadena.includes("Hola"));

// // Páginas: 54
// console.log("METODOS DE ARRAYS. Página: 54");
// let numeros = [10, 34, 15, 20];
// console.log("Array original: " + numeros);
// console.log("Pop (elimina ultimo): " + numeros.pop());
// console.log("Array despues de pop: " + numeros);
// numeros.push(25);
// console.log("Push (agrega 25): " + numeros);
// numeros.sort();
// console.log("Sort (ordenar): " + numeros);
// numeros.reverse();
// console.log("Reverse (invertir): " + numeros);

// numeros.forEach(numero => {
//     console.log("Elemento for-each ", numero);
// });
// numeros.splice(1,2,[3,4]);//reemplazamo desde el indice 1, dos numeros, 25,15 por 3 y 4
// console.log("Splice (reemplazar elementos en un indice): " + numeros);

// // Páginas: 55
// console.log("METODOS DE ARRAYS. Página: 55");
// colores = ["rojo", "azul", "verde"];

// console.log("Arreglo original: ", colores);
// console.log("Arreglo original longitud: ", colores.length);
// console.log("Arreglo pop: ", colores.pop());
// console.log("Arreglo pop length: ", colores.length);
// console.log("Forzar la logitud del arreglo a: ", colores.length=3);
// console.log("Arreglo forzado: ", colores);

// // Páginas: 56
// console.log("PROPIEDAD LENGTH. Página: 56");
// let coloresArray = ["rojo", "azul", "verde"];
// coloresArray[coloresArray.length] = "amarillo";
// console.log("Agregar amarillo: " + coloresArray);

// // Páginas: 59
// console.log("PILAS - PUSH. Página: 58");
// let coloresPila = ["rojo", "azul", "verde"];
// coloresPila.push("negro", "blanco");
// console.log("Despues de push: " + coloresPila);

// // Páginas: 60
// console.log("PILAS - POP. Página: 59");
// let coloresPop = ["rojo", "azul", "verde", "negro", "blanco"];
// console.log("Elemento eliminado: " + coloresPop.pop());
// console.log("Array despues de pop: " + coloresPop);

// // Páginas: 61
// console.log("METODO SHIFT. Página: 61");
// let coloresShift = ["rojo", "azul", "verde", "amarillo"];
// console.log("Elemento eliminado del inicio: " + coloresShift.shift());
// console.log("Array despues de shift: " + coloresShift);

// console.log("METODO UNSHIFT. Página: 61");
// let coloresUnshift = ["azul", "verde", "amarillo"];
// console.log("Nueva longitud: " + coloresUnshift.unshift("naranja"));
// console.log("Array despues de unshift: " + coloresUnshift);

// // Páginas: 61
// console.log("METODO REVERSE. Página: 62");
// let coloresReverse = ["rojo", "azul", "verde", "amarillo"];
// coloresReverse.reverse();
// console.log("Array invertido: " + coloresReverse);

// console.log("METODO SORT. Página: 62");
// let coloresSort = ["rojo", "azul", "verde", "amarillo"];
// coloresSort.sort();
// console.log("Array ordenado: " + coloresSort);

// // Páginas: 63
// console.log("METODO JOIN. Página: 63");
// let numerosJoin = [1, 2, 3];
// let textoJoin = numerosJoin.join("-");
// console.log("Array unido con guion: " + textoJoin);

// console.log("METODO CONCAT. Página: 62");
// let nombres = ["Jose", "Pedro", "Maria"];
// let edades = [18, 20, 19];
// let personas = nombres.concat(edades);
// console.log("Arrays concatenados: " + personas);

// // Páginas: 64
// console.log("METODO SLICE. Página: 64");
// let coloresSlice = ["amarillo", "naranja", "azul", "rojo", "verde"];
// console.log("Slice (1,3): " + coloresSlice.slice(1, 3));
// console.log("Slice (2): " + coloresSlice.slice(2));

// // Páginas: 65
// console.log("METODO SPLICE - SUPRESION. Página: 65");
// let coloresSplice1 = ["amarillo", "naranja", "azul", "rojo", "verde"];
// console.log("Elementos eliminados: " + coloresSplice1.splice(0, 2));
// console.log("Array despues de splice: " + coloresSplice1);

// console.log("METODO SPLICE - INSERCION. Página: 65");
// let coloresSplice2 = ["amarillo", "naranja", "azul", "rojo", "verde"];
// console.log("Resultado: " + coloresSplice2.splice(1, 0, "Pepe"));
// console.log("Array despues de insertar: " + coloresSplice2);

// Páginas: 66
console.log("METODO SPLICE - REEMPLAZO. Página: 66");
let coloresSplice3 = ["amarillo", "naranja", "azul", "rojo", "verde"];
coloresSplice3.splice(2, 1, "morado", "violeta");
console.log("Array despues de reemplazar: " + coloresSplice3);

// // Páginas: 66
// console.log("OBJETOS. Página: 66");
// let persona = {
//     nombre: "Juan",
//     edad: 25,
//     ciudad: "Quito",
//     saludar: function() {
//         return "Hola, mi nombre es " + this.nombre;
//     }
// };
// console.log("Nombre: " + persona.nombre);
// console.log("Edad: " + persona["edad"]);
// console.log(persona.saludar());