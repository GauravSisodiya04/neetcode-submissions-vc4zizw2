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
       if(!node) return null;
       let visited = new Map();

        function traverse(current){

            if(visited.has(current)){
                return visited.get(current);
            }

            let clone = new Node(current.val);

            visited.set(current, clone);

            for(let neighbor of current.neighbors){
                clone.neighbors.push(traverse(neighbor));
            }

            return clone;


        }

        return traverse(node);
    }

    
}
