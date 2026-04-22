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
     * @return {boolean}
     */
    isValidBST(root) {
        //Lets try to solve this iteratively

        let stack = [];
        let current = root;
        let prev = -Infinity;

        while(current || stack.length>0){
            //First , identify the left most element to begin the inorder traversal
            while(current){
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();

            if(prev >= current.val){
                return false
            }
            prev = current.val;
            current = current.right;
        }

        return true;
       
    }
}
