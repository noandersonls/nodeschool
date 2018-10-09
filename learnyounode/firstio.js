const fs = require('fs');

const readed = fs.readFileSync(process.argv[2]);
const linesCounter = readed.toString().split('\n').length - 1;
console.log(linesCounter);
