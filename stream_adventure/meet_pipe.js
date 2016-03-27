const filename = process.argv[2];

const fs = require("fs");
fs.createReadStream(filename).pipe(process.stdout);