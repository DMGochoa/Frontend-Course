# Primeros pasos de JavaScript

Podemos escribir el mitico "Hola Mundo" que se usa para validar que todo este debidamente instalado. Es de remarcar que en JavaScript hay cuatro formas de ejecutarlo, la primera es a traves de la consola del navegador web de preferencia, luego con html podemos utilizar HTML al utilizar la etiqueta script, archivos JS y por ultimo utilizando node.js que es un entorno de ejecución back-end diseñado para ejecutar código JavaScript.

Cuando usamos el navegador es bastante bueno cuando estamos haciendo cosas del lado del frontend pero si escribimos mucho codigo en este lado deberiamos utilizar mejor Vscode con nuestros archivos .js mejor organizados y separados. Con node.js tambien lo podemos utilizar mas hacia el lado del servidor y la parte del backend.

## Variables

Podemos hacer el simil con las cajas para almacenar cosas, en donde le ingresamos elementos para ser guardados y luego utilizarlos. Para poder identificar que es lo que tenemos dentro de estas variables o cajas lo que hacemos es darles una etiqueta que describa el contenido y por eso nosotros lo que realizamos es darle nombres.

Ejemplo:

```JavaScript
let parqueaderPublico = "Corolla"
```

Recomendaciones:

- **Nombres Descriptivos:** Elige nombres significativos para tus variables. Esto hace que tu código sea más legible y comprensible para ti y para otros programadores que puedan revisarlo.
- **CamelCase:** Es común usar la convención de camelCase para nombrar variables en JavaScript. Comienza con minúscula y las palabras subsecuentes empiezan con - mayúscula (por ejemplo: nombreUsuario, edadPersona).
- **Declaración de Variables:** Siempre declara tus variables antes de usarlas. Esto ayuda a evitar errores y a tener un código más organizado.

Buenas Prácticas:

- **Usar const:** Si sabes que el valor de la variable no cambiará, utiliza const. Esto ayuda a prevenir cambios accidentales en el código y hace que sea más fácil entender su propósito.
- **Limitar el Alcance de las Variables:** Intenta mantener el alcance de tus variables lo más pequeño posible. Esto significa declarar las variables donde realmente las necesitas y evitar que sean accesibles desde cualquier parte del código.
- **Evitar Variables Globales:** Las variables globales pueden causar conflictos y efectos no deseados. Intenta limitar su uso al mínimo necesario para evitar problemas de mantenimiento.

Evitar:

- **Reutilizar Nombres de Variables:** Evita reutilizar el mismo nombre de variable para diferentes propósitos en diferentes partes de tu código. Esto puede causar confusiones y errores difíciles de depurar.
- **Declarar Variables sin Palabras Clave:** Evita declarar variables sin usar las palabras clave let, const o var. Esto puede llevar a variables globales no intencionadas y potenciales conflictos en el código.
- **Usar Nombres Reservados:** No uses nombres reservados de JavaScript (por ejemplo: let, const, for, function, etc.) como nombres de variables. Pueden generar comportamientos inesperados o errores.

Es de resaltar que let lo usamos para variables que cambian con el tiempo y usamos const para casos en los que hay valores constates a traves del tiempo.

## Tipos de datos

Para este punto lo que vamos hacer es identificar que tipo de informacion es la que vamos a poder guardar dentro de esas variables. Antes que nada debemos abordar conceptos como la inmutablidad, mutabilidad y el tipado dinamico. En JavaScript tenemos 10 tipos de datos 7 primitivos y 3 complejos.

Primitivos:
- string
- number
- boolean
- null
- undefined
- symbol
- bigint

Complejos:
- object
- array
- function

Podemos identificar que en los datos primitivos estos son inmutables y se pasan por valor, mientras que los complejos son mutables y se pasan por referencia.

### Paso por valor y paso por referencia

Los primitivos se pasan por valor y los complejos se parsan por referencia. Primero hagamos el ejercicio de guardar en variables elementos primitivos. Lo que veriamos en memoria seria lo siguiente:

| Variable |  Valor |
|:--------:|:------:|
|     x    |    1   |
|     y    | 'Hola' |
|     z    |  null  |

Dado el caso que tengamos nuevas variables a, b y c que se les asigne los valores de x, y y z pues se obtendria lo siguiente:

| Variable |  Valor |
|:--------:|:------:|
|     x    |    1   |
|     y    | 'Hola' |
|     z    |  null  |
|     a    |    1   |
|     b    | 'Hola' |
|     c    |  null  |

Si cambiamos los valores de a, b y c por otros seguiria siendo la misma variable y solo cambia el valor y a esto es a lo que nos referimos cuando hablamos de paso por valor. Por otro lado si hacemos ```let frutas = ['manzana']``` obtenemos la siguiente estructura en memoria:

| Variable |  Valor | Direccion de Memoria |    Objeto   |
|:--------:|:------:|:--------------------:|:-----------:|
|     x    | <#001> |         #001         | ['manzana'] |

Si le agregamos un elemento al array por medio del metodo push agregamos el elemento 'peras' veriamos lo siguiente:

| Variable |  Valor | Direccion de Memoria |         Objeto      |
|:--------:|:------:|:--------------------:|:-------------------:|
|     x    | <#001> |         #001         | ['manzana', 'pera'] |

Lo que estamos haciendo es revisar la direccion de memoria y luego modificar el objeto realizando un paso por referencia. Ya que estamos es revisando la posicion en memoria para poder realizar el cambio. Hay que tener cuidado cuando hagamos la asignacion de un objeto a una nueva variable porque lo mas seguro es que apunten a la misma direccion de memoria, por eso toca hacer una copy  ya que si modificamos uno podemos modificar ambos. Esto mismo pasa cuando usamos tipos de datos objeto.

|    Variable   |  Valor | Direccion de Memoria |         Objeto      |
|:-------------:|:------:|:--------------------:|:-------------------:|
|     frutas    | <#001> |         #001         | ['manzana', 'pera'] |
|  otrasFrutas  | <#001> |                      |                     |

Cuando quedan objetos huerfanos, el recolector de basura se encarga de eliminar esos elementos que dejan de tener una referencia asociada a una variable.

## Lenguajes de Programacion

Normalmente lo que se hace es traducir las intrucciones de un lenguaje que el ser humano puede entender al lenguaje de la maquina y tenemos dos grupos generales de lenguajes de programacion. Compilados (c, c++, Rust, Go) y los interpretados (Python, JavaScript, Ruby) ya que el primero traduce antes de la ejecucion, mientras el segundo lo que trata es de ir traduciendo a medida que se va ejecutando.

Hay otra caracteristica que tienen ambos y es que los compilados tienen chequeo de tipos, mientras que el chequeo dinamico esta asociado a los interpretados. Esto hace que JavaScript no se da cuenta de que tipo de datos tiene hasta que se va ejecutando y esto hace que se considere un lenguaje de tipado debil que hace que uno pueda darle valores diferentes a las variables sin importar el tipo.

Dentro de este tema tenemos algo llamado la conversion de tipos y se clasifica en dos tipos, la explicita (lo hace el programador) y la implicita (el programa lo hace)


