"use strict";
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestlist = [
    "faiqa",
    "noor",
    "huma",
    "gul"
];
//loop for each to print invitation
guestlist.forEach((guestName) => {
    console.log(`Dear ${guestName}, you are invited to dinner.`);
});