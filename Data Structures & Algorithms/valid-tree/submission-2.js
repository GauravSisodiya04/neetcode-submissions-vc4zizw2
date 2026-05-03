class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {

        // A graph is a valid tree if 
        // a. It has exactly n-1 edges
        // b. No cycle exists or no island exists
        // every node is reachable from every other node
        if(edges.length !== n-1) return false;
        let adj = [];
        for(let i=0; i<n; i++){
             adj.push([]); // Pushes a brand new empty array each time
        }
        for(let [u,v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }
        // Once we have the graph in place , lets do a quick BFS .
        let visited = new Set();
        // Every time we visit a node, we add it to above
        // At the end , its size should be equal to number of nodes
        let queue = [0];
        while(queue.length>0){
            let current = queue.shift();
            visited.add(current);
            for(let neibhbor of adj[current]){
                if(!visited.has(neibhbor)){
                    visited.add(neibhbor);
                    queue.push(neibhbor);
                }
            }
        }
        return visited.size === n;
    }
}
