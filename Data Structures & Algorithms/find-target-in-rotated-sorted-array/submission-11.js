class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // input 1 --> [3,4,5,6,1,2] --> target 1  
        // input 2 --> [1,2,3,4,5,6] --> target 3
        // input 3 ---> [6,1,2,3,4,5] --> target 1

        // Edge cases
        // [5] --> Target 5 and Target 2
        // [0,1,2] --> Target 2
        // [3 ,1] --> Target 1

        if(nums === null || nums.length === 0){
            return -1;
        }
        let left =0;
        let right = nums.length -1 ;


        while(left <=right ){
            //the while has a equality check because we can have a single element array
            let mid = Math.floor((left+right)/2);
            if(nums[mid] === target){
                return mid;
            }

            //Lets check which half is sorted

            if(nums[mid] >= nums[left]){
                if(target >= nums[left] && target < nums[mid]){
                    right = mid -1;
                } else {
                    left = mid +1;
                }
            } else {
                if(target > nums[mid] && target <= nums[right]){
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

        }

        return -1;
    }
}