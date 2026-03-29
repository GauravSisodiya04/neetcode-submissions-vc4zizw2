/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const oldToNew = new Map();
        return this.dfs(node, oldToNew);
    }

    dfs(node, oldToNew){
        if(node === null){
            return null ;
        }
        if(oldToNew.has(node)){
            return oldToNew.get(node);
        }
        const copy = new Node(node.val);
        oldToNew.set(node, copy);

        for(let prevNeibhor of node.neighbors){
            copy.neighbors.push(this.dfs(prevNeibhor, oldToNew));
        }

        return copy;
    }
}
