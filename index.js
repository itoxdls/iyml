const IYml = require('./lib/iyml');
const yml = new IYml();

if (!process.argv[2] || !process.argv[3]){
    console.log('Error file path');
} else {
    yml.run(process.argv[2], process.argv[3]);
}