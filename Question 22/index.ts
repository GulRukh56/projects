//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//function to create fruit objects
function createfruit(name: string, color: string, taste: string) {
    return{
        name,
        color,
        taste
         };
    }
    //create an array of fruits
    const fruits = [
        createfruit("Apple", "Red", "Sweet"),
        createfruit("Orange", "Orange", "Sweet"),
        createfruit("Pear", "Yellow", "Sweet"),
        createfruit("Grapes", "Green", "Sweet"),
        createfruit("Strawberry", "Red", "Sweet")];
        //access an invalid index
        const invalidIndex =10 //there are only five elements in the array, so this will cause an erorr
        console.log(`fruit at index) ${invalidIndex}:`, fruits [invalidIndex]);
        //print the fruits
        fruits.forEach((fruit)=>
         {
    console.log(`name: ${fruit.name}, color: ${fruit.color}, taste: ${fruit.taste}`);
        })
    
        export{};