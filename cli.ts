/**
 * Expose my code for easy CLI use
 */
import {print as colorPrint} from './index';

colorPrint('Hello, World!', process.argv[2]);
