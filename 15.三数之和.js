/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);

  let result = [];

  for (let k = 0; k < nums.length - 2; k++) {
    if (nums[k] > 0) break;
    if (k > 0 && nums[k] === nums[k - 1]) continue;
    let i = k + 1;
    let j = nums.length - 1;

    while (i < j) {
      let sum = nums[k] + nums[i] + nums[j];

      if (sum < 0) {
        while (nums[i] === nums[++i]) continue;
      }

      if (sum === 0) {
        result.push([nums[k], nums[i], nums[j]]);
        while (nums[j] === nums[--j]) continue;
        while (nums[i] === nums[++i]) continue;
      }

      if (sum > 0) {
        while (nums[j] === nums[--j]) continue;
      }
    }
  }
  return result;
};
// @lc code=end
