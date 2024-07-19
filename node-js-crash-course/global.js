// Similar to window object in browser, global is the global object in js.

//console.log(global);

// global.setTimeout(() => {
//     console.log('Set Timeout')
// }, 3000);

// setTimeout(() => {
//         console.log('Set Timeout')
//     }, 3000);


// let i = 1;
// const int = setInterval(() => {
//     console.log('Set Interval');
//     i++;
//     if(i > 10){
//         clearInterval(int);
//     }
// }, 1000);

console.log(__dirname);
console.log(__filename);

//some of the global selector in browser are unabailable. Like document,querySelector.

// console.log(document.querySelector);