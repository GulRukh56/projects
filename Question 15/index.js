"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/
let guestlist = [
    "anam",
    "sawera",
    "noor"
];
//step 1. print the name of a person who Can't make it.
let GuestWhoCantMakeIt = "noor";
console.log(`${GuestWhoCantMakeIt} can't make it to dinner`);
//step 2. replace the name of guest who cant make it.
let NewGuest = "imran khan";
let indexOfGuestWhoCantMakeIt = guestlist.indexOf(GuestWhoCantMakeIt);
console.log(GuestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestlist[indexOfGuestWhoCantMakeIt] = NewGuest;
}
console.log(guestlist[2]);
//step 3. print a second set of invitation messages.
console.log("print a second set of invitation messages:");
guestlist.forEach((guest) => {
    console.log(`dear ${guest}, you are invited to dinner`);
});
