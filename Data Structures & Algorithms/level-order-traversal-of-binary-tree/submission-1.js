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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root)return [];
        let finalList = [];
        let queue = [root];

        while(queue.length>0){
            let currentSizeOfQueue = queue.length;
            let listOfNodesAtCurrentLevel = [];

            for(let i = 0; i< currentSizeOfQueue; i++){
                let node = queue.shift();
                listOfNodesAtCurrentLevel.push(node.val);
                if(node.left)queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            finalList.push(listOfNodesAtCurrentLevel);
        }
        return finalList;
    }
    }
