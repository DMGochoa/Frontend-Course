const promise = new Promise((resolve, reject) => {
    resolve('success')
})

const cows = 15;

const countCows = new Promise((resolve, reject) => {
    if (cows === 15) {
        resolve('Enough cows')
    } else {
        reject('Not enough cows')
    }
});

countCows.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
}).finally(() => {
    console.log('Promise finished')
});
