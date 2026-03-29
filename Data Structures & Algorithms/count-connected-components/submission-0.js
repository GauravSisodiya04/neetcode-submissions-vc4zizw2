class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        //Create an adjacency list

        let adj = Array.from({length:n}, ()=>[]);

        for(let [u,v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }
        const visited = new Set();

        let components = 0;

        for(let i =0 ; i< n ; i++){
            if(!visited.has(i)){
                components++;
                this.dfs(i, adj, visited);
            }
        }

        return components;
    }

    dfs(node, adj, visited){
        visited.add(node);
        for(let neibhor of adj[node]){
            if(!visited.has(neibhor)){
            this.dfs(neibhor, adj, visited);
            }
        }
    }
}
