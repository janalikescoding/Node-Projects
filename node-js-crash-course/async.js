console.log('start')
setTimeout(async () => {
    console.log('timeout');
    console.log('timeou2');
    const b = await a();
    console.log(b);
    console.log('timeou3');
    console.log('timeou4');
    console.log('timeou5');
    console.log('timeou6');
}, 100)
console.log(1)
console.log(2)


async function a(){
    return new Promise((resolve, reject) => {
        resolve('abc');
    })
}