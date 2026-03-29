class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        //Lets define the required variables

        if(!grid || grid.length === 0){
            return 0;
        }

        const rows = grid.length;
        const cols = grid[0].length;
        let maxArea = 0;
        let visited = new Set();


        function dfs(r,c){

            let key = `${r},${c}`;

            //Base case - Water, outof bounds or already visited

            if(r<0 || c<0 || r>=rows || c>=cols || grid[r][c] === 0 || visited.has(key)){
                return 0;
            }

            visited.add(key);

            let area = 1;

            area = area+ dfs(r+1,c);
            area = area+ dfs(r-1, c);
            area = area+ dfs(r, c+1);
            area = area+ dfs(r, c-1);

            return area;

        }
        
        //Lets scan each element to check if its start of an island
        for(let i = 0; i<rows;i++){
            for(let j = 0; j<cols ; j++){
                let key = `${i},${j}`;
                if(grid[i][j] === 1 && !visited.has(key)){
                    let currentArea = dfs(i,j);
                    maxArea = Math.max(maxArea, currentArea);
                }
            }
        }


    return maxArea;

    }
}
