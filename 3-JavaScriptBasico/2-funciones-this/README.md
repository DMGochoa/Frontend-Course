# Funciones
Supongamos que es black friday y queremos aprovechar los descuentos para comprar cosas, pero cada una de las marcas de ropa tienen un descuento. Lo que tenemos es que la ropa tiene el precio normal y al lado se especifica el valor del descuento en porcentage. Pero si estamos en black friday hay mucha gente y pues no tenemos el valor final de las prendas, con calculadora nos tocaria hacer una y otra vez la misma operacion, por eso lo mas practico es crear una funcion que haga rapidamente ese valor final que se deberia pagar al final.

- Lo primero es entender que es lo que necesitamos y para este caso es obtener el precio final luego de aplicar los descuentos. OUTPUT
- Adicionalmente necesitamos saber que datos tenemos y que disponemos. Que para este caso tenemos el precio y el descuento. INPUT

Ejemplo de funcion:
```JavaScript
function suma (a, b) {
    return a + b
}
console.log(suma(1, 2)) // 3
```

## Funciones puras e impuras
En las funciones puras, dada una misma entrada (input), obtendremos una misma salida (output). Por otro lado, las funciones puras no tienen efectos secundarios (side effects).

Qué nos puede causar side effects:

- Modificar variables globales.
- Modificar parámetros.
- Solicitudes HTTP.
- Impresiones de mensajes en pantalla o consola.
- Manipulación del DOM (Document Obect Model).
- Obtener la hora actual.

#### Contexto de ejecucion this

Una funcion puede saber a que objeto pertenece con el elemento this. Esto hace que podamos usar atributos y metodos ya establecidos dentro de nuestro objeto.

#### Arrow function
Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

Diferencias y limitaciones:

- No tiene sus propios enlaces a this o super y no se debe usar como métodos.
- No tiene argumentos o palabras clave `new.target`.
- No apta para los métodos `call`, `apply` y `bind`, que generalmente se basan en establecer un ámbito o alcance
- No se puede utilizar como constructor.
- No se puede utilizar yield dentro de su cuerpo.

#### Funciones constructoras

Estas son unas funciones que nos sirven para crear objetos una y otra vez y de esta forma evitamos duplicar codigo. Por ejemplo si queremos crear objetos cohetes.

- Duplicar codigo implica:
  - **Mantenimiento difícil:** Duplicar código hace que mantener y actualizar el software sea más complicado. Cuando se realiza un cambio en una parte del código duplicado, es necesario recordar y aplicar ese cambio en todas las instancias duplicadas, lo que puede ser propenso a olvidos y errores.
  - **Aumento de complejidad:** La presencia de código duplicado aumenta la complejidad del sistema. En lugar de tener una única fuente de verdad para una funcionalidad o lógica, hay múltiples instancias que deben ser coordinadas y gestionadas, lo que puede resultar en un código más difícil de entender y mantener.
  - **Mayor probabilidad de errores:** Duplicar código incrementa la posibilidad de introducir errores, ya que cualquier cambio realizado en una instancia duplicada puede no propagarse de manera consistente a todas las demás. Esto puede conducir a comportamientos inesperados y a la necesidad de corregir errores en múltiples lugares.
  - **Dificultad de escalar:** A medida que el proyecto crece, la duplicación de código puede volverse más difícil de manejar. La cantidad de código duplicado puede aumentar exponencialmente, lo que dificulta la adición de nuevas funcionalidades, la corrección de errores y la mejora del sistema en general.
  - **Tiempo y recursos:** Duplicar código implica utilizar más tiempo y recursos en el desarrollo y mantenimiento del software. En lugar de reutilizar y mantener una única implementación, se deben dedicar recursos adicionales a mantener y sincronizar múltiples copias del mismo código.
  - **Violación de principios de diseño (DRY):** DRY (Don't Repeat Yourself) es un principio de diseño que aboga por la eliminación de duplicación en el código. Duplicar código va en contra de este principio, ya que implica repetir la misma lógica en varios lugares, lo cual es considerado una mala práctica de programación.
  - **Dificultad en la identificación de errores:** Identificar y corregir errores se vuelve más desafiante cuando el código está duplicado. La propagación de cambios puede no ser evidente de inmediato, lo que dificulta la tarea de encontrar y corregir problemas en el software.

#### Modo estricto y objeto window

La declaración `'use strict';` es una directiva en JavaScript que se utiliza para activar el modo estricto ("strict mode" en inglés) en un script o función. Cuando se habilita el modo estricto, se aplican reglas adicionales y se realizan restricciones en la forma en que se escribe el código. Algunas características clave del modo estricto incluyen:

Errores más estrictos: Se generan más errores en situaciones que normalmente se pasarían por alto en el modo no estricto. Por ejemplo, asignar valores a variables no declaradas o modificar objetos sellados resultaría en errores.
Eliminación de ciertos comportamientos "confusos": Algunas características consideradas confusas o propensas a errores son eliminadas o modificadas en el modo estricto. Por ejemplo, en el modo estricto, el uso de with está prohibido.
Seguridad mejorada: El modo estricto ayuda a escribir código más seguro al eliminar algunas construcciones propensas a errores y alentando prácticas de codificación más seguras.
La declaración `'use strict';` es una directiva en JavaScript que se utiliza para activar el modo estricto ("strict mode" en inglés) en un script o función. Cuando se habilita el modo estricto, se aplican reglas adicionales y se realizan restricciones en la forma en que se escribe el código. Algunas características clave del modo estricto incluyen:

Errores más estrictos: Se generan más errores en situaciones que normalmente se pasarían por alto en el modo no estricto. Por ejemplo, asignar valores a variables no declaradas o modificar objetos sellados resultaría en errores.
Eliminación de ciertos comportamientos "confusos": Algunas características consideradas confusas o propensas a errores son eliminadas o modificadas en el modo estricto. Por ejemplo, en el modo estricto, el uso de with está prohibido.
Seguridad mejorada: El modo estricto ayuda a escribir código más seguro al eliminar algunas construcciones propensas a errores y alentando prácticas de codificación más seguras.
Para habilitar el modo estricto, simplemente coloca la declaración `'use strict';` al comienzo de tu script o función:

javascriptCopy code `'use strict';`

```JavaScript
use strict;
x = 10; // Error: x is not defined
```

Es importante tener en cuenta que una vez que se activa el modo estricto, no se puede desactivar dentro del mismo script o función. Se aplica a todo el alcance del script o función. La declaración `use strict;` es compatible con versiones modernas de JavaScript y se recomienda su uso para mejorar la calidad y seguridad del código.

Nosotros usamos el use strict para no ser tan permisivos porque en los navegadores tenemos muchas facilidades a la hora de escribir codigo de JavaScript. Incluso en navegadores existe un objeto window que es global y cuando hacemos this en navegador se apunta a este objeto window.
