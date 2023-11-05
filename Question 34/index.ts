//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to the print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza

const favoritePizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];

// Loop to print the names of the pizzas
console.log("My favorite pizzas are:");
for (const pizza of favoritePizzas) {
  console.log(pizza);
}

// Loop to print simple statements about each pizza
console.log("\nMy thoughts on these pizzas:");
for (const pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}

// A closing statement about your love for pizza
console.log("\nI really love pizza!");