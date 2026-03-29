class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // [4,5,6].  target 10
        let result = [];
        let hashMap = {};

        for(let i=0; i< nums.length ; i++){
            let complement = target - nums[i];
            if(hashMap[complement] !== undefined){
                return [hashMap[complement], i];
            }
            hashMap[nums[i]] = i;
        }
        return result;
    }
}
