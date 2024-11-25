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

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

 */
type AnagramMap = Map<string, number>;

function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) {
		return false;
	}
	const sMap = getMap(s);
	const tMap = getMap(t);
	for (let [key, value] of sMap) {
		if (!tMap.has(key) || tMap.get(key) !== value) {
			return false;
		}
	}
	return true;
};

function getMap(s: string): AnagramMap {
	const map: AnagramMap = new Map<string, number>();
	[...s].forEach(char => {
		const value = map.get(char);
		map.set(char, value === undefined ? 1 : value + 1);
	});
	return map;
}

isAnagram('aacc', 'ccac');
