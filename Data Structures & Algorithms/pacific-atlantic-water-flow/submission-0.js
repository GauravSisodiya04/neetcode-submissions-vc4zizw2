class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        // What problems we need to solve 
        // Which cells can reach from Atlantic
        // Which cells can reach from Pacific
        if(!heights || heights.length === 0) return [];
        let rows = heights.length;
        let cols = heights[0].length;
        let pacificSet = new Set();
        let atlanticSet = new Set();
        let results = [];
        function dfs(r, c, oceanSet, previousHeight){
            //Check for out of bounds, height should be more than current height to visit
            let key = `${r},${c}`;
            if(r>=rows || c>=cols || r<0 || c<0 || oceanSet.has(key) || previousHeight > heights[r][c]){
                return ;
            }

            oceanSet.add(key);
            dfs(r+1, c, oceanSet , heights[r][c]);
            dfs(r-1, c, oceanSet , heights[r][c]);
            dfs(r, c+1, oceanSet , heights[r][c]);
            dfs(r, c-1, oceanSet , heights[r][c]);

        }

        // We know that the pacific covers all elements having row as 0 and 
        // atlantic covers all rows having r = rows-1

        for(let c = 0 ; c< cols; c++){
            dfs(0,c,pacificSet, heights[0][c]);
            dfs(rows-1, c, atlanticSet, heights[rows-1][c]);
        }


        // Lets cover the left and right walls

        for(let r = 0; r< rows; r++){
            dfs(r, 0, pacificSet, heights[r][0]);
            dfs(r,cols-1, atlanticSet, heights[r][cols-1]);
        }

        //Once we have both the sets populated , we can have one more scan on both and check if they have the overlapoping keys

        for(let i = 0; i< rows ;i++){
            for(let j=0; j< cols; j++){
                if(atlanticSet.has(`${i},${j}`) && pacificSet.has(`${i},${j}`)){
                    results.push([i,j]);
                }
            }
        }

        return results;

    }
}
