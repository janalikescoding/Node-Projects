const fs = require('fs');

//reading files
// fs.readFile('./docs/readme.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })


//writing files
// fs.writeFile('./docs/readme.txt','Hey. Hello', (err) => { //If file does not exist, new file is created
//     if(err) {
//         console.log(err);
//     }
//     console.log('write complete');
// })

//directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('folder removed');
//     })
// }


//deleting files
// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if(err){
//             console.log(err);
//         }
//     })
// }