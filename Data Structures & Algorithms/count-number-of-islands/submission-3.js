class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        let numberOfIslands =0;
        let rows = grid.length - 1 ;
        let cols = grid[0].length -1;

        function traverse(r,c){
            if(r < 0 || r > rows || c<0 || c >cols || grid[r][c] === "0"){
                return false;
            }
            grid[r][c] = "0";
            traverse(r-1,c);
            traverse(r+1,c);
            traverse(r,c+1);
            traverse(r, c-1);
        }

        for(let r = 0 ; r<=rows; r++){
            for(let c = 0; c<=cols ; c++){
                if(grid[r][c] === "1"){
                    ++numberOfIslands;
                    traverse(r,c);
                }
            }
        }

        return numberOfIslands;

    }
  
}
