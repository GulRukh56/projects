"use strict";
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
let guestlist = [
    "imran khan",
    "arif shah",
    "anam",
    "sawera"
];
//step 1. Message about inviting only two people
console.log(`i can invite only two people for dinner`);
//step 2.Remove guests from your list one at a time until only two names remain in your list
while (guestlist.length > 2) {
    let removeGuest = guestlist.pop();
    console.log(`sorry ${removeGuest}, i can't invite you to dinner`);
}
//step 3. Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let guest of guestlist) {
    console.log(`hello ${guest}, you are still invited for dinner`);
}
//step 4.Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestlist.pop();
guestlist.pop();
console.log(`guest list after dinner: ,guestlist`);
