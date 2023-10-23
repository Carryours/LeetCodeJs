/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  function fastPow(x, n) {
    if (n === 0) {
      return 1.0;
    }
    if (n === 1) {
      return x;
    }
    const half = fastPow(x, Math.floor(n / 2));
    if (n % 2 === 0) {
      return half * half;
    } else {
      return half * half * x;
    }
  }

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  return fastPow(x, n);
};
// @lc code=end
