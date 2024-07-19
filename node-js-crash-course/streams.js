const fs = require('fs');

const readStream = fs.createReadStream('./docs/largetext.txt', {encoding : 'utf8'});
const writeStream = fs.createWriteStream('./docs/writelargetext.txt');

// readStream.on('data', (chunk) => {
//     console.log('---NEW CHUNK---');
//     console.log(chunk);
//     writeStream.write('\n---NEW CHUNK---\n');
//     writeStream.write(chunk);
// })

//piping
readStream.pipe(writeStream);

//duplex stream - we can read and write through it