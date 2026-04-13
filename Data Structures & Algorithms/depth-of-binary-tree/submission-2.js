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
    maxDepth(root) {

        if(root === null){
            return 0;
        }

        let stack = [{node:root, depth:1}];
        let maxDepthSoFar = 0;


        while(stack.length){
            let {node, depth} = stack.pop();
            maxDepthSoFar = Math.max(depth, maxDepthSoFar);

            if(node.right){
                stack.push({node:node.right, depth: depth+1});
            }
            if(node.left){
                stack.push({node:node.left, depth: depth+1});
            }

        }

        return maxDepthSoFar;

    }
}
