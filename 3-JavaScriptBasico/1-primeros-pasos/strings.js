// Creacion de strings
const string1 = "Hola Mundo"
const string2 = 'Hola Mundo'
const string3 = `Hola Mundo`

// Concatenacion de strings
// Opcion 1: Operador +
const direccion = "Calle 123"
const ciudad = "Bogota"
const direccionCompleta = direccion + " " + ciudad
console.log(direccionCompleta)

// Opcion 2: Template Literals
const direccionCompleta2 = `${direccion} ${ciudad}`
console.log(direccionCompleta2)

// Opcion 3: Metodo concat
const direccionCompleta3 = direccion.concat(" ", ciudad)
console.log(direccionCompleta3)

// Opcion 4: Metodo join
const direccionCompleta4 = [direccion, ciudad].join(" ")
console.log(direccionCompleta4)

// Caracteres de escape
//const whatDoIDo = 'I'm Software Developer'
// 1. Escape alternativo
const whatDoIDo = "I'm Software Developer"
console.log(whatDoIDo)

// 2. Escape con backslash
const whatDoIDo2 = 'I\'m Software Developer'
console.log(whatDoIDo2)

// 3. Template literals
const whatDoIDo3 = `I'm Software Developer`
console.log(whatDoIDo3)

// Escritura de textos largos

const textoLargo = "Lorem ipsum dolor sit ame \n" +
"consectetur adipiscing elit. Sed non risus. \n" +
"Suspendisse lectus tortor, dignissim sit amet, \n" +
"adipiscing nec, ultricies sed, dolor."
console.log(textoLargo)

// De corrido
const textoLargo2 = "Lorem ipsum dolor sit ame \n\
consectetur adipiscing elit. Sed non risus. \n\
Suspendisse lectus tortor, dignissim sit amet, \n\
adipiscing nec, ultricies sed, dolor."
console.log(textoLargo2)

// Template literals
const textoLargo3 = `Lorem ipsum dolor sit ame
consectetur adipiscing elit. Sed non risus.
Suspendisse lectus tortor, dignissim sit amet,
adipiscing nec, ultricies sed, dolor.`
console.log(textoLargo3)

// Manipulacion de strings
// String Primitivo
const stringPrimitivo = "Soy primitivo"
console.log(stringPrimitivo)
console.log(typeof stringPrimitivo)

const stringPrimitivo2 = String("Soy primitivo")
console.log(stringPrimitivo2)
console.log(typeof stringPrimitivo2)

// String Objeto
const stringObjeto = new String("Soy objeto")
console.log(stringObjeto)
console.log(typeof stringObjeto)

// Acceder a caracteres
const saludo = "Hola Mundo"
console.log(saludo[0])
console.log(saludo.charAt(0))
console.log(saludo.indexOf("Mundo"))
console.log(saludo.indexOf("o"))
console.log(saludo.lastIndexOf("o"))
console.log(saludo.includes("Hola"))
console.log(saludo.slice(0, 4))
console.log(saludo.length)
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())

const saludo2 = saludo.split(" ")
console.log(saludo2)

const saludo3 = "  Hola Mundo   "
console.log(saludo3)
console.log(saludo3.trim())

console.log(saludo.replace("Hola", "Chao"))

