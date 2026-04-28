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
     * @return {number}
     */
    maxPathSum(root) {
        //Lets assume the maximum we have is the negative infinity
        let globalMax =-Infinity;

        function dfs(node){
            if(!node)return 0;

            let leftSum = dfs(node.left);
            let maxLeftSum = Math.max(0, leftSum); // to handle a branch which returns negative

            let rightSum = dfs(node.right);
            let maxRightSum = Math.max(0, rightSum);
            let currentPathSum = node.val + maxRightSum+ maxLeftSum;
            globalMax = Math.max(currentPathSum, globalMax);

            return node.val+ Math.max(maxLeftSum, maxRightSum);

        };
        dfs(root);
        return globalMax;
    }

    
}
