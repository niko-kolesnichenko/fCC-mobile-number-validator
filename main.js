/*
Telephone Number Validator

Return true if the passed string looks like a valid US phone number.
The user may fill out the form field any way they choose as long as it has the format of a valid US number.
The following are examples of valid formats for US numbers (refer to the tests below for other variants):
    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
Your job is to validate or reject the US phone number based on any combination of the formats provided above.
The area code is required. If the country code is provided, you must confirm that the country code is 1.
Return true if the string is a valid US phone number; otherwise return false.
*/

// Final solution
function telephoneCheck(str) {
  let telephonePattern = /^1?\s*(\d{3}|\(\d{3}\))\s*-*\d{3}\s*-*\d{4}$/;
  return telephonePattern.test(str);
}

console.log(telephoneCheck("555-555-5555"));

// Thinking history

/*
important notes on this regex during the testing:
- adding ^ and $ to establish start&end of the pattern
- using check-for-mixed-grouping approach for area codes 555 or (555)
- using ? for the first optional country code
*/

function testTelephoneCheck(str) {
  let telephonePattern = /^1?\s*(\d{3}|\(\d{3}\))\s*-*\d{3}\s*-*\d{4}$/;
  return telephonePattern.test(str);
}

console.log(testTelephoneCheck("555-555-5555")); //true
console.log(testTelephoneCheck("1 (555) 555-5555")); //true
console.log(testTelephoneCheck("2 (555) 555-5555")); //false
console.log(testTelephoneCheck("(255) 5555-5555")); //false
console.log(testTelephoneCheck("5555555555")); //true
console.log(testTelephoneCheck("1 555)555-5555")); //false
console.log(testTelephoneCheck("1 456 789 4444")); //true
console.log(testTelephoneCheck("123**&!!asdf#")); //false
console.log(testTelephoneCheck("(6054756961)")); //false
console.log(testTelephoneCheck("2 (757) 622-7382")); //false
console.log(testTelephoneCheck("0 (757) 622-7382")); //false
console.log(testTelephoneCheck("-1 (757) 622-7382")); //false
console.log(testTelephoneCheck("(555)5(55?)-5555")); //false