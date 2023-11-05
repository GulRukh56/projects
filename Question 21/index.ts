//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
const bouquet=

{
    name: "Daisy flower",
    price: "320",
    description: "beautiful arrangments of daisy flowers"
}
    // define an array of objects
    let bouquets: Array<typeof bouquet> = [];
    // pushing multiple objects
    bouquets.push(bouquet);

    bouquets.push({name: "iris flower",
    price: "360",
    description: "beautiful arrangments of iris flowers"})
    
    let bouquet3 = {name: "tullip flower",
    price: "300",
    description: "beautiful arrangments of tullip flowers"}
     bouquets.push(bouquet3);
     //console.log(bouquets);
     // function to display bouquets
     function displayBouquets(bouquets : Array<typeof bouquet>)
       
     {
        for (let i of bouquets) 
        {
            console.log(`title:${i.name}
            description${i.description}
            price:${i.price}
            ______\n`);
        }
    }
    displayBouquets(bouquets)