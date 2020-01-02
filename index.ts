import chalk from 'chalk';


export function print(str: string, color: string){
    let colorFun = (chalk as any)[color];
    if (colorFun){
        str = colorFun(str)
    } else {
        console.log(chalk.red('Sorry, I don\'t have that color.'));
    }
    console.log(str)
}
