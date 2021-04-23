//Given a string, return true if the string represents a valid number. A valid number can include integers, a ., -, or +.“7”, “0011”, “+3.14”, “4.”, “-.9”, “-123.456”, “-0.1”

//Examples of invalid numbers: “abc”, “1a”, “e8”, “–6”, “-+3”, “95x54e53.”

function validNumber(string) {
    return !isNaN(parseFloat(string)) && isFinite(string);
    //let matchString = new RegExp(/\d+\.\d+/ig);
    //return matchString.test(string);
    // return /^-?\d+$/.test(string);

}
console.log(validNumber("1a"));
console.log(validNumber("0011"));
console.log(validNumber(+3.14));
console.log(validNumber("8"));
console.log(validNumber("7"));
console.log(validNumber("7.2"));
console.log(validNumber("-6"));
console.log(validNumber("-0.1"));
console.log(validNumber("-.9"));
console.log(validNumber("abc"));
console.log(validNumber("e8"));
console.log(validNumber("95x54e53."));