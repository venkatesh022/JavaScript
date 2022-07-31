/////  string problems   //////////

//  find no.of 'o' in the string
// let msg = 'Lorem ipsum dolor'
// let findZeros = (str) => {
//     let count = 0;
//     for(let i=0; i<str.length-1;i++){
//         let char = str.charAt(i);
//         if(char === 'l' || char === 'L'){
//             count++
//         }
//     }
//     return count;
// }
// console.log(findZeros(msg)); 

// let words = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam!';
// let findWord = (words) => {
//     let count = 0;
//     for(let i=0; i<words.length-1;i++){
//         let char = words.charAt(i)
//         if(char === 'a' || char === 'A'){
//             count++;
//         }
//     }
//     console.log(count);
// }
// findWord(words)


/////////////////   Reverse string   ///////////////////

// let word = 'Lorem Ipsum Dolor'
// let reverseStr = (word) => {
//     let temp = '';
//     for(let i=word.length-1; i>=0; i--){
//         let char = word.charAt(i)
//         temp += char
//     }
//     console.log(temp);
// }
// reverseStr(word)

/////////////////////////////////////////

// function reverse(str){
//     let newStr = "";
//     for(let i=str.length-1; i>=0; i--){
//         newStr += str[i]
//     }
//     console.log(newStr);
// }
// reverse('Twilight')

//////////////////////////////////////////

// function palindrome(str){
//     let len = str.length;
//     let mid = Math.floor(len/2);
//     for(let i=0; i<mid; i++){
//         if(str[i] !== str[len -1 - i]){
//             return false
//         }
//     }
//     return true;
// }
// // palindrome('madam')
// // palindrome('siri')
// console.log(palindrome('madam'));
// console.log(palindrome('siri'));

///////////////   palindrome   ///////////
//
// function palindrome(str){
//     let len = str.length;
//     let mid = Math.floor(len/2)
//     for(let i=0; i<mid; i++){
//         if(str[i] !== str[len - 1 - i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(palindrome('alexa'));
// console.log(palindrome('madam'));
