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
        const hashMap = new Map();
        for(let i = 0;i< inorder.length; i++){
            hashMap.set(inorder[i], i);
        }

        let pre_index = 0;

        function dfs(left, right){
            if(left>right) return null;
            let root_val = preorder[pre_index];
            ++pre_index;
            let root = new TreeNode(root_val);
            let mid = hashMap.get(root_val);
            root.left = dfs(left, mid-1);
            root.right = dfs(mid+1, right);
            return root;
        }
        return dfs(0, inorder.length - 1);

    }
}
