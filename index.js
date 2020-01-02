const chalk = require('chalk');

function print(str, color){
    const colorFun = chalk[color];
    if (colorFun){
        str = colorFun(str)
    } else {
        console.log(chalk.red('Sorry, I don\'t have that color.'));
    }
    console.log(str)
}

module.exports = {
    print
};
