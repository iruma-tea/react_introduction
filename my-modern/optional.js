const str = null;
// console.log(str.substring(1)); // TypeError: Cannot read property 'substring' of null   
// if (str !== null && str !== undefined) {
//     console.log(str.substring(1));
// }
console.log(str?.substring(1)); // undefined