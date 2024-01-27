const snoopy = null;
console.log(snoopy, typeof snoopy);
// null es de los datos primitivos pero el typeof nos devuelve object. Este error es de javascript y no se puede arreglar ya que es un error de hace mucho tiempo y si se arregla se romperia mucho codigo que se aprovecha de este error.

const undefinedVariable = undefined;
console.log(undefinedVariable, typeof undefinedVariable);
// undefined es de los datos primitivos pero el typeof nos devuelve undefined. Que idica que no esta definido y que hay un elemento. En general no se busca que una variable sea undefined se espera que JavaScript lo entregue.

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
// Los symbol son unicos y no se pueden comparar con el operador de igualdad.

const ID = Symbol('id');
let user = {}
user[ID] = '12345';
console.log(user);

// BigInt sirve para representar numeros muy grandes.
const aBigNumber = 900719925474099145634563456345634563456345n;
console.log(aBigNumber);

// La n es para indicar que es un bigInt.