// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // SOLUTION USING TWO POINTERS PATTERN -- TIME: 0(N)  SPACE 0(1)
  let left = 0
  let right = s.length - 1

  while (left < right) {
    let last = s[right]
    let first = s[left]

    s[left] = last
    s[right] = first

    left++
    right--
  }

  return s
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
// Output: ["o","l","l","e","h"]
