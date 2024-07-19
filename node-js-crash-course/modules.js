const xyz = require('./people');

console.log(xyz); //Returns empty object unless we export from people.js

console.log(xyz.people, xyz.ages);

//if you want to import just people, then do const {people} = require('./people'); people should match the source; xyz will be unavailable.

//Many default objects available

const os = require('os'); //One of the inbuild modules available

console.log(os.platform(), os.homedir());