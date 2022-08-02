/*
*VARIABLES
?Elementos cuyo valor puede cambiar a lo largo de la ejecución*/
//*Creación de variables
//Para la creación de las variables, tenemos dos palabras claves disponibles:
//* VAR
//* LET
//! Diferencias entre VAR y LET
//! VAR: cuando creamos una variable con VAR, esta variable, puede ser 
//!REASIGNADA y tambien 
//!REDECLARADA
var numero; //*DECLARACIÓN
numero=100; //*ASIGNACIÓN
console.log(numero);
var numero;
numero="Hola mundo"; //!REDECLARANDO Y REASIGNANDO
console.log(numero);

//!LET: Cuando creamos una variable con LET, esta variable puede 
//!REASIGNARSE
//! Pero no puede REDECLARARSE

let numero2; //!Declaración
numero2=63;
console.log(numero2);

//let numero3; //!Redeclaración
numero2="Hola mundo";//!Reasignación
console.log(numero2);

/*
*CONSTANTES
?Una constante es un valor que no cambia a lo largo de la ejecución.
*/
//*Creación de constantes
//Para crear una CONSTANTE, se usa la palabra clave CONST
//? Una constante:
//? Debe DECLARARSE Y ASIGNARSE al mismo tiempo
//! Una CONSTANTE, no puede REDECLARARSE Y NO PUEDE REASIGNARSE
const gravedad=9.8; //*DECLARACIÓN Y ASIGNACIÓN
//gravedad=10; //!REASIGNACIÓN
//const gravedad//!REDECLARACIÓN
console.log("El valor de la gravedad es: ",gravedad);

//const pi; //!LA DECLARACIÓN Y ASIGNACIÓN DEBE REALIZARCE AL MISMO TIEMPO


//*Ejercicios
// Crear 5 variables usando VAR y mostrarlas
// Redeclarar las 5 variables
// Reasignar las 5 variables y mostrarlas

// Crear 5 variables usando LET y mostrarlas
// Reasignar las 5 variables y mostrarlas

// Crear 5 constantes y mostrarlas

let a= 34;
let b= 53;
let c= 82;
let resultado;
//*OPERADORES
//*Operadores Matemáticos
// *    Multiplicación
resultado= a*b;
console.log(resultado);
// /    División
resultado= a/b;
console.log(resultado);
// +    Suma
resultado= a+b;
console.log(resultado);
// -    Resta
resultado= a-b;
console.log(resultado);
// **   Potenciación
resultado= a**b;
console.log(resultado);
// %    Módulo
resultado= a%b;
console.log(resultado);
// ++   Incremento
resultado= b++;
console.log(resultado);
// --   Decremento
resultado= b--;
console.log(resultado);

//*Operadores de Asignación
// =    Igual
console.log(a);
a=b;  
console.log(a);
// +=   Igual más
console.log(a);
a+=b;
//a=a+b;  
console.log(a);
// -=   Igual Menos
a-=b;
console.log(a);
// *=   Igual producto
let n1=5;
let n2=8;
n1 *= n2;
//n1 = n1*n2;
console.log("El valor de n1 es: ", n1);
// /=   Igual división
let d=20;
console.log("El valor de d es: ", d);
let e=4;
console.log("El valor de e es: ", e);
d/=e;
//d=d/e;
console.log("El valor de d es: ", d);
// %=   Igual Módulo
let n3=15;
let n4=4;
n3 %= n4;
console.log("El valor de n3 es: ", n3);
// **=  Igual potenciación
let base=2;
let exponente=3;
//base= base ** exponente;
//console.log("El valor de base es: ", base);
base **= exponente;
console.log("El nuevo valor de base es: ", base);


//*Operadores de concatenación
// +    Concatenación
let texto1= "Holas";
let texto2= "Mundo";
console.log(texto1+" "+texto2);

//*Operadores de Comparación
// ==   Comparación
let valor1=3;
let valor2="3";
let respuesta;

respuesta= valor1 == valor2;
console.log(respuesta);

// ===  Comparación estricta
respuesta= valor1 === valor2;
console.log(respuesta);

// !=   Diferente
// !==  Diferente estricto
// >    Mayor que
// <    Menor que
// >=   Mayor o igual que
// <=   Menor o igual que

//!Realizar 3 ejemplos de cada operador y mostrar los resultados mediante la consola de javaScript


//*Operadores Logicos
// &&   Y
// ||   O
// !    No