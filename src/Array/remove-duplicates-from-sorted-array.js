/* 
Question- remove duplicates from a sorted array in place.
Constraint - should not use extra space for another array. Instead, modify the input array directly 
and return the length of the array after removing the duplicates.
*/

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let count = 0;
  for (let j = 1; j < nums.length; j++) {
    if(nums[count] !== nums[j]) {
        count++;
      nums[count] = nums[j];
    }
  }
   // Return the length of the array with unique elements
   return count + 1;
}

// Example
const nums = [1, 1, 2, 2, 3, 3, 4];
const newLength = removeDuplicates(nums);

console.log(newLength); // Output: 4
console.log(nums.slice(0, newLength)); // Output: [1, 2, 3, 4]
