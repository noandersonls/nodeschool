const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, function readed(err, content) {
  const lines = content.toString().split('\n').length - 1;
  console.log(lines);
});
