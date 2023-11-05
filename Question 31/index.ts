/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */
//non empty array case
let usernames: string[] = ['Aniqa', 'aleena', 'gul','amina'];
//functional case
function greetuser(userNames: string[]): void{
if(userNames.length===0) {
    console.log('We need to find some users!');
return;
}
for (const userName of userNames) {
    if(userName.toLocaleLowerCase() === 'admin') {
        console.log('hello admin, would you like to see a status report?');
    } else {
       console.log('hello ${userName}, thank you for logging in again');
    }
  }
}
console.log(`for non empty userName: \n`);
greetuser(usernames);
// to make array empty we just assigning an emty array to userName
usernames = [];
console.log(`\n\n empty  userName: \n`);
greetuser(usernames);
export{};