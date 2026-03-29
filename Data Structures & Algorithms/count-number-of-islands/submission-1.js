class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        const rows = grid.length;
        const cols = grid[0].length;
        let islandCount = 0;

        function dfs(r, c){
            //base case 
            //We encountered water
            //We are out of bounds

            if(r<0 || c<0 || r>=rows || c>=cols|| grid[r][c] === "0"){
                return;
            }

            // Since its a new island , we need to sink this one and call on its neibhors
            grid[r][c] = "0";

            dfs(r+1,c);
            dfs(r-1,c);
            dfs(r, c+1);
            dfs(r, c-1);
        }
          // we need to check every cell in the grid if its an island
          // This runs for O(M*N)
          // Space -- O(1) 
        for(let i = 0; i< rows; i++){
            for(let j =0 ; j< cols ; j++){
                if(grid[i][j] === "1"){
                    islandCount++;
                    dfs(i,j);
                }
            }
        }

        return islandCount;

    }

        
}
