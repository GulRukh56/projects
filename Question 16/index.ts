/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
let guestlist:Array<string> =[
    "anam",
    "noor",
    "sawera"
];
//step 1.informing people that you found a bigger dinner table.
for(let guest of guestlist) {
   console.log(`hello ${guest}, we found a bigger dinner table.`)
}
//step 2.Add one new guest to the beginning of your array.
let NewGuestAtBeggining:string = "imran khan"
guestlist.unshift(NewGuestAtBeggining)
console.log(guestlist)
//step 3. Add one new guest to the middle of your array. 
let NewGuestInMiddle:string = "arif alvi"
let middleindex: number = Math.floor(guestlist.length/2)
guestlist.splice(middleindex, 0, NewGuestAtBeggining)
console.log(guestlist)
//step 4. Use append() to add one new guest to the end of your list.
let NewGuestAtEnd:string= "Anmol Rajpoot"
guestlist.push(NewGuestAtEnd)
console.log(guestlist)
//step 5.Print a new set of invitation messages, one for each person in your list.*/
console.log ("New set Of invitation messages:") 
for(let guest of guestlist)
{ 
console.log(`Dear ${guest}, you are invited to dinner`)
}