class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //For a sudoku board to be valid, we need to look for few things
        //It must occur only once in each of the rows, columns and current boxes
        //How can we do that - We can create three arrays for rows, columns and boxes respectively
        //Each of them can have a set at each index 
        //Eg rowsInventory = [{},{},{},{},{},{},{},{},{}] -
        // Where any value occuring in row 0 should be added to the set at rowsInventory[o] which is our set0;
        //Similarly for each column and box. We can derive this from each value . 
        // like board[r][c] --> can directly give us access to rowsInventory[r] and colsInventory[c]

        let rowsInventory = Array.from({length:9}, ()=>{
            return new Set();
        })
        let colsInventory = Array.from({length:9}, ()=>{
            return new Set();
        })
        let boxesInventory = Array.from({length:9}, ()=>{
           return new Set();
        })

        let resultFlag = true; //Lets assume initially its  a  valid board

        //iterate through each element

        for(let r = 0; r< 9; r++){
            for(let c= 0; c<9; c++){
                let currentValue = board[r][c];

                if(currentValue === "."){
                    continue;
                }

                //determine the current box we are in
                let currentBox = Math.floor(r/3)*3 + Math.floor(c/3);

                if(boxesInventory[currentBox].has(currentValue) || rowsInventory[r].has(currentValue)|| colsInventory[c].has(currentValue)){
                    resultFlag = false;
                }

                boxesInventory[currentBox].add(currentValue);
                rowsInventory[r].add(currentValue);
                colsInventory[c].add(currentValue);
            }
        }

        return resultFlag;


    }
}
