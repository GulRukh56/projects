"use strict";
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */
//step 1 arrays
const current_users = ["aniqa", "amna", "areeba", "gul", "noor"];
const new_users = ["arif", "ali", "zain", "humza"];
function CheckUsersName(current_users, new_user) {
    // 1st step of function
    const LowercasedCurrentUsers = current_users.map(user => user.toLowerCase());
    //2nd step of function
    for (const newUser of new_users) {
        const LowercasedNewUser = (newUser.toLowerCase());
        const LowercasedCurrentUsers = newUser.toLowerCase();
        if (LowercasedCurrentUsers.includes(LowercasedNewUser)) {
            console.log(`username "${new_users}" is already taken please enter a new username`);
        }
        else {
            console.log(`username "${new_users}" is available`);
        }
    }
}
//console.log(current_user)
// test the function
CheckUsersName(current_users, new_users);
