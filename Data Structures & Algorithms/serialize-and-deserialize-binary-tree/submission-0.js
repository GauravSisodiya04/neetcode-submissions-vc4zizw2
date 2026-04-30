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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let results = [];
        function preorderTraverse(node){
            if(!node){
                results.push("N");
                return;
            }
            results.push(node.val.toString());
            preorderTraverse(node.left);
            preorderTraverse(node.right);
        }
        preorderTraverse(root);
        return results.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let values = data.split(",");
        let idx = 0;
        function build(){
        let stringValueOfCurrentNode = values[idx];
        if(stringValueOfCurrentNode === "N"){
             ++idx;
            return null;
        }
        ++idx;
        let integerValueOfNode = parseInt(stringValueOfCurrentNode);
        let node = new TreeNode(integerValueOfNode);
        node.left = build();
        node.right = build();
        return node;
        }
        return build();
    }
}
