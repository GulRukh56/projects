"use strict";
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, modelName, ...additionalInfo) {
    const carInfo = {
        manufacturer,
        modelName,
    };
    for (const info of additionalInfo) {
        for (const key in info) {
            if (info.hasOwnProperty(key)) {
                carInfo[key] = info[key];
            }
        }
    }
    return carInfo;
}
// Call the function with required and optional information
const car = createCar("Toyota", "Camry", { color: "Blue", hasSunroof: true });
// Print the returned object
console.log(car);
