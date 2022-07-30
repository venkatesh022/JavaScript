// let date = new Date().getFullYear()
// console.log(date);

// let number = Number.MAX_SAFE_INTEGER()
// console.log(number);

/// Max number
// let maxNumber = Number.MAX_SAFE_INTEGER
// console.log(maxNumber);

// min number
// let number = Number.MIN_SAFE_INTEGER;
// console.log(number);

// infinity
// let infy = Number.POSITIVE_INFINITY;
// console.log(infy);

// let infy = Number.NEGATIVE_INFINITY;
// console.log(infy);

// ParseInt
// let num1 = Number.parseInt('102')
// console.log(typeof num1);

// let num1 = Number.parseInt('123.12')
// console.log(num1);

//Parse float
// let num2 = Number.parseFloat('12.125')
// console.log(num2);

// let num = 148;
// let numString = num.toString()
// console.log(typeof numString);

//toFixed
// let amount = 500;
// // console.log(amount.toFixed(2));
// console.log(`Rs : ${amount.toFixed(2)}`);

// let amount = 499;
// console.log(`Rs : ${amount.toFixed(2)}`);

//strings
// let str = String('Today is happy')
// console.log(str.length);

// let str = 'HAPPY ENDING'
// let str1 = 'hard starter'
// console.log(str.toLowerCase());
// console.log(str1.toUpperCase());
// console.log(str1.toLocaleUpperCase());

///////////////////////////////////

// ////////////   JSON OBJECT   /////////////////

//  string => object : parse()
//  object => string : stringify()

/////// object to string  //////

// let city = {
//     name : 'Dwaraka',
//     age : 3400,
//     language : 'sanskrit'
// }

// console.log(typeof city); /* object */

// let strCity = JSON.stringify(city)
// console.log(typeof strCity); /* string */ 

////// string to object  /////
// let city = {
//     name : 'Dwaraka',
//     age : 3400,
//     language : 'sanskrit'
// }
// // console.log(city);

// let newCity = JSON.stringify(city)
// console.log(typeof newCity); // object

// let strCity = JSON.parse(newCity)
// console.log(strCity); // string