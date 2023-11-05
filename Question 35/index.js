"use strict";
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
const animals = ["Dog", "Cat", "Rabbit"];
const commonCharacteristic = "They are common choices as pets.";
// Loop to print the names of the animals
console.log("List of animals:");
for (const animal of animals) {
    console.log(animal);
}
// Loop to print statements about each animal
console.log("\nAbout these animals:");
for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
// Mention what these animals have in common
console.log(`\n${commonCharacteristic}`);
