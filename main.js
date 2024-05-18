
function compareValues(a, b) {

    if (a === undefined || b === undefined) {
        return "No is equal to";
    }
   
    if (a == b) {
        return "equal";
    } else {
        return "No is equal to";
    }
}


console.log (compareValues("Nanuka", "Nanuka"))

function convertFahrenheitToCelsius(fahrenheit) {
    // Check if the input is a number
    if (typeof fahrenheit !== 'number' || isNaN(fahrenheit)) {
        return false;
    }
    // Convert Fahrenheit to Celsius
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

console.log(convertFahrenheitToCelsius('hello')); // Output: false