"use strict";
/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
// step 1. create an Array to store a travel destinations
let travelDestination = ["Turkey", "Paris", "Makkah Mukarma", "Canada", "America"];
// step 2.print your Array in its original order
console.log("original order:");
console.log(travelDestination);
//step 3.Print your array in alphabetical order without modifying the actual list.
console.log("\n Alphabetical order without modifying the actual list");
console.log([...travelDestination].sort());
//step 4.Show that your array is still in its original order by printing it
console.log("\n Showing array is still in its original order by printing it");
console.log(travelDestination);
//step 5. Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n reverse alphabetical order without changing the order of the original list.");
console.log([...travelDestination].sort().reverse());
//step 6.Reverse the order of your list again. Print the list to show it’s back to its original order
console.log("\n Showing array is still in its original order by printing it");
console.log(travelDestination);
//step 7.Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n reverse order");
travelDestination.reverse();
console.log(travelDestination);
//step 8 Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n back to original");
travelDestination.reverse();
console.log(travelDestination);
//step 9.Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n change to alphabatically order");
travelDestination.sort();
console.log(travelDestination);
//step 10.Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.log("\n change to revers alphabatical order");
travelDestination.sort().reverse();
console.log(travelDestination);
