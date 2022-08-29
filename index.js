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
  O(n^2)
*/

/* 
  for element of array, 
  if array[i] + array[j+ 1] is equal to the target, 
  return true

*/

/*
  given an array of numbers and a target sum, return true if any two numbers
  of the array add up to the target sum
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
