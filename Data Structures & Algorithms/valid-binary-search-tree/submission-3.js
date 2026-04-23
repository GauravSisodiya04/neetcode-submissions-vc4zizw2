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
        if(!root) return true;
        let stack = [];
        let current = root;
        let prev = -Infinity;

        while(current || stack.length>0){
            while(current){
                stack.push(current);
                current = current.left;
            }

            current = stack.pop();

            if(current.val <= prev.val){
                //In a BST, prev will always be smaller than current. If we reached this block
                //It means that condition was violated. return false
                return false;
            }
            //continue rest of the tree
            prev = current;
            current = current.right;
        }

        return true;
        //Time complexity : No matter its balanced tree or skewed tree, we have to do O(n) operations. Each node gets added to stack and popped at max once
        //Space: If balanced , logn . Else skewed , gonna be n . --> O(h)

    }
}
