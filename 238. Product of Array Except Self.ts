/*
https://leetcode.com/problems/product-of-array-except-self/description/
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:
    2 <= nums.length <= 105
    -30 <= nums[i] <= 30
    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

// Malo O(n^2) porque O(n) * O(n) = O(n^2) (hago iteraciones anidadas)
// function productExceptSelf(nums: number[]): number[] {
// 	const result: number[] = [];
// 	for (let i = 0; i < nums.length; i++) {
// 		const operation = nums.reduce((accumulator, value, index) => {
// 			if (index === i) return accumulator;
// 			return accumulator * value;
// 		}, 1);
// 		result.push(operation);
// 	}
// 	return result;
// };


// Bueno O(n) (porque O(n) + O(n) = O(n))
// Pero no sirve porque te obliga a hacerlo sin division
// function productExceptSelf(nums: number[]): number[] {
// 	const product = nums.reduce((accumulator, value) => {
// 		return accumulator * value
// 	}, 1);
// 	return nums.map(value => product / value);
// };

function productExceptSelf(nums: number[]): number[] {
	const size = nums.length;
	if (size === 1) return [1];

	const left = new Array(size).fill(1);
	for (let i = 1; i < size; i++) {
		left[i] = nums[i - 1] * left[i - 1];
	}

	const right = new Array(size).fill(1);
	for (let j = size - 2; j >= 0; j--) {
		right[j] = nums[j + 1] * right[j + 1];
	}

	const prod = new Array(size).fill(1);
	for (let i = 0; i < size; i++) {
		prod[i] = left[i] * right[i];
	}
	return prod;
}

var startTime = performance.now()
const result = productExceptSelf([1, 2, 3, 4]);

console.log(result);
var endTime = performance.now()
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
