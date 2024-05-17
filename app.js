"use strict";
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
// Explain & TIP: In modern JavaScript development, modules 
// allow you to divide your code into separate files. This makes your code more organized and maintainable.
//  You can export functions, objects, or primitives from one file and import them into another.
Object.defineProperty(exports, "__esModule", { value: true });
// SOLUTION:
// In another file where you want to use the add function:
// import {add} from "./mathFunction";
// console.log(add(2, 3));
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
// Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability is a 
// cornerstone of modern JavaScript application structure.
// In another file where you want to use the add function:
// import { add } from "./mathFunction";
// console.log(add(2, 3)); // Outputs: 5
// // Demonstrates importing the add function from mathFunctions.ts and using it.
// SOLUTION:
const mathFunction_1 = require("./mathFunction");
console.log((0, mathFunction_1.add)(2, 7));
