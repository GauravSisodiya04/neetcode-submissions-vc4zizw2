class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length !== n-1) return false;

        const adj = Array.from({length: n}, ()=>[]);

        for(let [u,v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }

        let visited = new Set();
        let queue = [0];
        visited.add(0);
        while(queue.length > 0){
            let node = queue.shift();
            for(let neigbour of adj[node]){
                if(!visited.has(neigbour)){
                    visited.add(neigbour);
                    queue.push(neigbour);
                }
            }
        }
        return visited.size === n;
         
    }
}
