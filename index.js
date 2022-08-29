function hasTargetSum(array, target) {
 for (i=0; i < array.length; i++) {
   for (j=i+1; j < array.length; j++) {
    const sum = array[i] + array[j];

    if (sum === target) {
      return true;
    }
   }
 }
return false;
}

  

/* 
  Write the Big O time complexity of your function here
*/

/* 
  for element of array, 
  if array[i] + array[i + 1] === target, 
  return true

*/

/*
  given an array of numbers and a target sum,
  for every element in the array, we are going to return a new array with the element added to every element in the array.
  then we will compare the sums of the element pairs every element of the new array with the target sum and return true if it is found.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 10, 13, 7, 5], 20)); // true

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
