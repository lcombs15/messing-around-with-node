/**
 * Expose my code for easy CLI use
 */
const colorPrint = require('./index').print;

colorPrint('Hello, World!', process.argv[2]);
