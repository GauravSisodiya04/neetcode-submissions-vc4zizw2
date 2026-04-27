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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {

        let left = 0;
        let right = inorder.length - 1;
        let currRootIndex = 0;

        function build(left, right){
            if(left>right){
                return null;
            }
            let currRootElement = preorder[currRootIndex];
            ++currRootIndex;

            let splitIndex = inorder.indexOf(currRootElement);

            let root = new TreeNode(currRootElement);

            root.left = build(left, splitIndex-1);
            root.right = build(splitIndex+1, right);
            return root;
        }

        return build(left, right);

        
    }
}
