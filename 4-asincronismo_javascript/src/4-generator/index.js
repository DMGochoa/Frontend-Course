function* gen () {
    yield 1;
    yield 2;
    yield 3;
}

let it = gen();
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }
console.log(it.next()); // { value: undefined, done: true }

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const names = ['John', 'Jane', 'Jack', 'Jill', 'Diego', 'Dora'];
let it2 = iterate(names);

console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
