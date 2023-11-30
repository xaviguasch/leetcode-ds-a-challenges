// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0
  let right = nums.length - 1

  const resultArr = []

  while (left <= right) {
    const squaredLeft = nums[left] ** 2
    const squaredRight = nums[right] ** 2

    console.log('squaredLeft: ', squaredLeft)
    console.log('squaredRight ', squaredRight)

    if (squaredLeft >= squaredRight) {
      console.log('squaredLeft is bigger')

      resultArr.unshift(squaredLeft)

      left++
    } else {
      console.log('squaredRight is bigger')
      resultArr.unshift(squaredRight)
      right--
    }

    console.log('resultArr: ', resultArr)
  }

  return resultArr
}

console.log(sortedSquares([-4, -1, 0, 3, 10]))
// Output: [0,1,9,16,100]

// console.log(sortedSquares([-7, -3, 2, 3, 11]))
// Output: [4,9,9,49,121]

// NOTES:

// # Intuition
// There are several ways of doing it, but "Two Pointers" allows you to do it in O(N) time complexity

// # Approach
// Implemented Two Pointers pattern

// # Complexity
// - Time complexity: O(N)

// - Space complexity: O(N) if you take output into account and O(1)O(1)O(1) otherwise.
