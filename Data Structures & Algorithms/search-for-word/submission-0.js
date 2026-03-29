class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length;
        let cols = board[0].length;

        function dfs(r,c,index){
            //Lets check if our first letter has match and continue our search for rest of the letters recursively

            //Base condition 1 of recursion , we are successful and can terminate the search

            if(index === word.length){
                return true;
            }

            //Failure base case ,
            //1. Either we are out of bounds, we encountered a mismatch or we exausted our matrix

            if(r>= rows || c >= cols || r<0 || c < 0 || board[r][c] !== word[index]){
                return false;
            }
        // If we are not yet successful, and we havent encountered any failure base cases, we must continue
        // our search since we likely found out one of the letters in sequence of the word string

        let temp = board[r][c];
        board[r][c] = "#" ; // we mask it so that we dont revisit the same letter

        let found = dfs(r+1 ,c , index + 1) ||
                    dfs(r-1, c, index + 1) ||
                    dfs(r, c+1, index+1) ||
                    dfs(r, c-1, index+1);

        board[r][c] = temp;

        return found;
        }

        //We need to check every element if it can be a starting point of our word search
        for(let i=0 ;i < rows ;i++){
            for(let j = 0; j<cols ; j++){
                if(dfs(i,j,0))return true;
            }
        }
        //Only if we have checked all elements as per above, we can say we couldnty find the word we were looking for
        //This covers the case where we dont have the first starting letter
        return false;
    }
}
