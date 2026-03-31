class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(height === null || height.length<3){
            return 0;
        }

        let left = 0;
        let right = height.length - 1;
        let totalWater = 0;
        let maxLeftHeight = 0;
        let maxRightHeight = 0;

        while(left<right){
            if(height[left] <= height[right]){
                if(height[left] >= maxLeftHeight){
                    maxLeftHeight = height[left];
                } else {
                    totalWater = totalWater+ maxLeftHeight - height[left];
                }
                left++;
            }else {
                if(height[right] >= maxRightHeight){
                    maxRightHeight = height[right];
                } else {
                    totalWater = totalWater+ maxRightHeight - height[right];
                }
                right--;
            }
        }
        return totalWater;

    }
}
