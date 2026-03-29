class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {

        // Lets use the rows and columns as switchboards. 

        // Lets first check if the first row or first column has zero

        let cols = matrix[0].length;
        let rows = matrix.length;
        let firstRowHasZero =false;
        let firstColumnHasZero = false;

        //check first row
        for(let j = 0; j<cols ;j++){
            if(matrix[0][j] === 0){
                firstRowHasZero = true;
            }
        }
        //Check if the first column has zero
        for(let i = 0; i<rows ;i++){
            if(matrix[i][0] === 0){
                firstColumnHasZero = true;
            }
        }

        //check each element and mark their switches

        for(let i = 1; i< rows ;i++){
            for(let j = 1; j<cols ;j++){
                if(matrix[i][j] === 0){
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
       


       for(let i = 1; i< rows ;i++){
            for(let j = 1; j<cols ;j++){
                if(
                    matrix[i][0] === 0 ||
                    matrix[0][j] === 0
                ){
                    matrix[i][j] = 0
                }
            }
        }


        if(firstRowHasZero) {
            for(let j = 0; j<cols ;j++){
                matrix[0][j] = 0;
            }
        }

        if(firstColumnHasZero){
            for(let i =0 ; i<rows ;i++){
                matrix[i][0] = 0;
            }
        }







}
}