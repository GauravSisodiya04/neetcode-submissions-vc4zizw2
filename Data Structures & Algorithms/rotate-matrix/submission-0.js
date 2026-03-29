class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        //Lets get a transpose of a matrix in O(n*n) time

        let n = matrix.length;

        for(let i=0;i<n;i++){
            for(let j=i;j<n;j++){
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        for(let i=0;i<n;i++){
            let left =0;
            let right = n-1;

            while(right>left){
                let temp = matrix[i][left];
                matrix[i][left] = matrix[i][right];
                matrix[i][right] = temp;
                left++;
                right--;
            }
        }
    }
}
