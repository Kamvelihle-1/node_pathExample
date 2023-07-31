const path =require('path')

console.log(path.isAbsolute(__filename));
console.log(path.normalize(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.toNamespacedPath(__filename));
console.log(path.relative(__dirname,__filename));
console.log(path.resolve(__filename));