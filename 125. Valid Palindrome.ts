/*
https://leetcode.com/problems/valid-palindrome/description/
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.
 */
function isPalindrome(s: string): boolean {
	const string = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
	if (string === "") return true;

	const isEven = string.length % 2 === 0;
	const modifier = isEven ? 0 : 1;

	const mitad01 = string.substring(0, string.length / 2);
	const mitad02 = string.substring(string.length / 2 + modifier, string.length);
	return mitad01 === [...mitad02].reverse().toString().replaceAll(",", "");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("!043XjqjX043!"));
