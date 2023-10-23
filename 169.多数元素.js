/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//   let map = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (!map[nums[i]]) {
//       map[nums[i]] = 1;
//     } else {
//       map[nums[i]] = map[nums[i]] + 1;
//     }
//     if (map[nums[i]] > nums.length / 2) return nums[i];
//   }
//   return null;
// };

// var majorityElement = function (nums) {
//   nums = nums.sort((a, b) => a - b);

//   return nums[Math.floor(nums.length / 2)];
// };

var majorityElement = function (nums) {
  let result = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === result) count++;
    else count--;

    if (count === 0) {
      count = 1;
      result = nums[i];
    }
  }
  return result;
};
// @lc code=end
