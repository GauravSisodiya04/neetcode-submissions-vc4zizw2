class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // We need to identify how many times we start a new traversals
        // A graph can have 5 independent nodes and all of them are called as components
        // Return value is integere

        let components =0;
        let visited =new Set();

        let adj = Array.from({length:n}, ()=>[]);

        for(let [vertex1, vertex2] of edges){
            adj[vertex1].push(vertex2); // push a into b
            adj[vertex2].push(vertex1); // vice versa
        }

        function dfs(i){
            visited.add(i);
            for(let neigbhor of adj[i]){
                if(!visited.has(neigbhor)){
                    dfs(neigbhor);
                }
            }
        }

        for(let i=0;i<n;i++){
            if(!visited.has(i)){
                components++;
            }
            dfs(i);
        }

    return components;

    }
}
