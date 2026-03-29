class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        if(grid.length === '0' || !grid){
            return ;
        }

        let islandsCount = 0;
        const rows = grid.length;
        const cols = grid[0].length;

        for(let r =0 ; r<rows ; r++){
            for(let c=0; c<cols;c++){
                if(grid[r][c] === '1'){
                islandsCount++;
                this.dfs(grid,r,c);
                }
            }
        }

        return islandsCount;
    }

    dfs(grid, r, c){
        const rows = grid.length;
        const cols = grid[0].length;
        //identify if we are in bound or encountered water
        if(r < 0 || c< 0 || r >= rows || c >= cols || grid[r][c] === '0' ){
            return ;
        }
        grid[r][c] = '0';

        //explore its neighbors

        this.dfs(grid , r+1, c);
        this.dfs(grid, r-1, c);
        this.dfs(grid, r, c+1);
        this.dfs(grid, r , c-1);
    }
}
