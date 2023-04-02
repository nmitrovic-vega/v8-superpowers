const firstObj = { a: 3, b: 200 }; // C0
const secondObj = { a: 4 }; 
secondObj.b = 5;
const thirdObj = Object.assign({}, firstObj);

console.log(%HaveSameMap(firstObj, thirdObj));
