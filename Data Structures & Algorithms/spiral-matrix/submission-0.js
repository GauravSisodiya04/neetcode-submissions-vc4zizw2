class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {

        if(matrix.length ===0) return [];

        // Define our walls/boundaries

        let left = 0;
        let top = 0;
        let bottom = matrix.length-1;
        let right = matrix[0].length-1;
        let result = [];

        // While we have still some room left to walk around

        while(top<=bottom && left <=right){

            //Target top row, walk across top from left to right

            for(let j = left; j<=right ; j++){
                result.push(matrix[top][j]);
            }
            top++;

            //Walk down across the right wall, from top to bottom

            for(let i = top; i<=bottom; i++){
                result.push(matrix[i][right]);
            }
            right--;

            if(bottom >=top){
                for(let i= right ; i>=left ; i--){
                    result.push(matrix[bottom][i]);
                }
            bottom--;
            }

            if(right>=left){
                for(let j = bottom; j>=top ; j--){
                    result.push(matrix[j][left]);
                }
                left++;
            }

        }
        return result;

    }
}
