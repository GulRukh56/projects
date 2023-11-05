 /*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

//Tests for equality and inequality with strings
let str1: string = "hello";
let str2: string = "hello";
console.log(str1===str2);//false
console.log(str1 !==str2);
//Tests using the lower case function
let strText1: string = "hello world";
let strText2: string = "hello world";
console.log(strText1.toLocaleLowerCase()===strText2);

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const Num1: number = 10
const Num2: number = 5
console.log(Num1 === Num2); //false
console.log(Num1 !== Num2); //true
console.log(Num1 < Num2); //false
console.log(Num1 > Num2); //true
console.log(Num1 >= Num2); //false
console.log(Num1 <= Num2); //true
//Tests using "and" and "or" operators
const x: number = 15
const y: number = 10
const z: number = 5

console.log(x<y && y<z); //true
console.log(x<y|| y>z); //false
console.log(x>y||  y>z); //true
console.log(x<y && y>z); //false
//Test whether an item is in a array
const fruits:string[] = ['apple', 'orange', 'banana','peach','pear'];
console.log(fruits.includes('banana')); //true
console.log(fruits.includes('mango')); //false
// Test whether an item is not in a array */
const colors:string[] =['pink','yellow','red','green']
console.log(!colors.includes('green')); // false
console.log(!colors.includes('brown')); // true