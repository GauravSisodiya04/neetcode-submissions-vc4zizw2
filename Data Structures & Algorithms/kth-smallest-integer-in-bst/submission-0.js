/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let result = [];
        result = this.dfs(root, result);
        return result[k-1];
    }

    dfs(root, result){
        if(!root) return null;
        this.dfs(root.left, result);
        result.push(root.val);
        this.dfs(root.right, result);
        return result
    }
}
