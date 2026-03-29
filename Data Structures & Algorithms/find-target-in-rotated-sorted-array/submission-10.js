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

        if(nums.length===0){
            return -1;
        }

        let left = 0;
        let right = nums.length -1 ;

        while (left <= right){
            let mid = Math.floor((left+right)/2);
            if(nums[mid] === target){
                return mid;
            }
            //check if left half is sorted
            if(nums[left] <= nums[mid]){
                // lets check if the number lies in left half
                if(nums[left] <= target && target < nums[mid]){
                    right = mid - 1;
                } else {
                    // must be in the right half
                    left = mid + 1;
                }

            } else {
                //right half must be sorted
                if(target > nums[mid] && target <= nums[right]){
                    left = mid + 1;
                } else
                    right = mid - 1;
            }
        }
         return -1;

        
    }
}