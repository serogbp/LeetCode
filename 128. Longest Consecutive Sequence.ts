/*
https://leetcode.com/problems/longest-consecutive-sequence/description/
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:
    0 <= nums.length <= 105
    -109 <= nums[i] <= 109
 */

function longestConsecutive(nums: number[]): number {
	if (nums.length === 0) return 0;
	const set: number[] = Array.from(new Set(nums)).sort((a, b) => a - b);
	let highestSecuence, currentHighestSecuence = 1;
	for (let i = 1; i < set.length; i++) {
		if (set[i] !== set[i - 1] + 1) {
			currentHighestSecuence = 1;
			continue;
		}
		currentHighestSecuence++;
		highestSecuence = Math.max(currentHighestSecuence, highestSecuence);
	}
	return highestSecuence;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
