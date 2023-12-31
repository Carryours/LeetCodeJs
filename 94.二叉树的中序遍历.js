/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  function inorder(node) {
    if (node === null) return;
    if (node.left) inorder(node.left);
    result.push(node.val);
    if (node.right) inorder(node.right);
  }

  let result = [];
  inorder(root);
  return result;
};
// @lc code=end
