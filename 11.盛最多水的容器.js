/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let k = 0;
  let j = height.length - 1;
  let max = 0;
  for (let i = 0; i < j; ) {
    let minHeight = Math.min(height[i], height[j]);

    max = Math.max(max, (j - i) * minHeight);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
};
// @lc code=end
