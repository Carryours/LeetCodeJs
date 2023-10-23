/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // let result = 0;
  // for(let i = 0; i < n; i++) {

  // }
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};
// @lc code=end
