// Code your solution in this file!
//    returnFirstTwoDrivers()
// 1) should return a new array containing the first two drivers from the passed-in array
//The slice() method returns shallow copy of selected elements in an array, as a new array.

//The slice() method selects from a given start, up to a(not inclusive) given end.

//The slice() method does not change the original array.
const returnFirstTwoDrivers = function (driver) {
    //returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
    // => ['Antonia', 'Nuru']
    return driver.slice(0, 2);
}
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = function (multiplyValue) {
    return function (value) {
        return multiplyValue * value;

    };

}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function (driver, arrayOfDrivers) {
    return arrayOfDrivers(driver)
}

