class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if(heights === null || heights.length<2){
            return 0;
        }

        //We can use two pointers. 
        let left = 0;
        let right = heights.length -1;
        let maxArea = 0;

        while(left<right){
            //The height of the container is the minumum of two

            let height = Math.min(heights[left], heights[right]);
            let width = right -left;
            let currArea = height*width;

            maxArea = Math.max(currArea, maxArea);

            if(heights[left]<heights[right]){
                left++;
            }else{
                right--;
            }
        }
        return maxArea;
    }
}
