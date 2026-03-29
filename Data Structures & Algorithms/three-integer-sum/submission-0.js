class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
      if(!nums || nums.length<3){
        return [];
      }

      nums = nums.sort((a,b) => a-b); // Step 1
      let result = [];

      for(let i = 0 ; i< nums.length ; i++){
        let left = i+1;
        let right = nums.length-1;
         if(i>0 && nums[i] === nums[i-1]){
            continue;
          }
        while(left < right){
          let sum = nums[i] + nums[left] + nums[right];
         
          if(sum === 0){
            result.push([nums[i], nums[left], nums[right]]);

            while(left<right && nums[left] === nums[left+1]){
              left++;
            }
            while(right>left && nums[right] === nums[right-1]){
              right--;
            }
            left++;
            right--;
          } else if (sum<0){
            left++
          }else{
            right--;
          }
        }
      }

      return result;

    }
}
