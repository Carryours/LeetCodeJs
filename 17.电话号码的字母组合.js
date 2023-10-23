/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  let map = new Map();
  let result = [];
  map.set("2", "abc");
  map.set("3", "def");
  map.set("4", "ghi");
  map.set("5", "jkl");
  map.set("6", "mno");
  map.set("7", "pqrs");
  map.set("8", "tuv");
  map.set("9", "wxyz");

  generate("", 0);

  return result;

  function generate(str, level) {
    if (level === digits.length) {
      result.push(str);
      return;
    }
    let value = map.get(digits[level]);

    for (let i = 0; i < value.length; i++) {
      generate(str + value[i], level + 1);
    }
  }
};

letterCombinations("23");
// @lc code=end
