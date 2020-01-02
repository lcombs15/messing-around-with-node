const chalk = require('chalk');

const colorFun = chalk[process.argv[2]];
let whatToPrint = 'Hello, world!';
if (colorFun){
    whatToPrint = colorFun(whatToPrint)
} else {
    console.log(chalk.red('Sorry, I don\'t have that color.'));
}

console.log(whatToPrint);
