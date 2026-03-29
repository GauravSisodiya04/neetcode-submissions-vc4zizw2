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
        //If no graph doesnt exist , return early and save on some effort
        if(!node) return null;
        // To solve this problem lets start with only one node . 
        let visited = new Map();
        function dfs(current){
        
            //base case--- If its already visited , just return it in O(1) time
            if(visited.has(current)){
                return visited.get(current);
            }
            // For a single node graph, we just need to clone it and mark it as visited
            //We need to solve few subproblems 
            // Step 1 --> Need a cloned node

            let clone = new Node(current.val);
            visited.set(current, clone);


            // What about the neibhors

            for(let neigbhor of current.neighbors){
                clone.neighbors.push(dfs(neigbhor));

            }
            return clone;
            
        }
        //Lets start at the entering point
        return dfs(node)
    }

}
