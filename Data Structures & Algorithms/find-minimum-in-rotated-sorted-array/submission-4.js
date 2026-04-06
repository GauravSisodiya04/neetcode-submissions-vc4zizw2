class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
       // We will use a binary search in this case since we need log n time complexity

       // In a regular sorted array , nums[mid] < nums[right] . If thats not the case, and its
       // inverse of above, it means the smallest lies in right
       let left = 0;
       let right = nums.length - 1;

       while(left<right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] > nums[right]){
            left = mid+1;
        } else {
            right = mid;
        }
       }

       return nums[left];
    }

}
