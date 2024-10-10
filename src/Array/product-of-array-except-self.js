function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1); // Result array filled with 1's

  // First pass: Calculate left products
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct; // Store the product of all the numbers to the left of nums[i]
    leftProduct *= nums[i]; // Update leftProduct to include nums[i]
  }
  console.log("left side products", result);
  // Second pass: Calculate right products and multiply with left products
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct; // Multiply the left product with the right product
    rightProduct *= nums[i]; // Update rightProduct to include nums[i]
  }

  return result;
}

const nums = [2, 3, 4, 5];
console.log(productExceptSelf(nums));
//For explanation watch out https://www.youtube.com/watch?v=G9zKmhybKBM
