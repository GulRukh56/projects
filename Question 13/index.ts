//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favouriteTransportation: Array< [Transport:string , brand: string 
 ]> = []

 favouriteTransportation.push(["Motercycle", "Honda"])
 favouriteTransportation.push(["car", "civic"])
 favouriteTransportation.push(["Airplane", "Amirits"])

//using for each loop

favouriteTransportation.forEach(([Transport,brand])=>
console.log(`I would like to own a ${brand}  ${Transport}`)

)