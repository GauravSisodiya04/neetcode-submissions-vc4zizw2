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
         let stack = [];
        let current = root;
        let counter = 0;

        while(current || stack.length>0){
            //First , identify the left most element to begin the inorder traversal
            while(current){
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            counter++;
            if(counter === k){
                return current.val;
            }
  
            current = current.right;
        }
    }
}
