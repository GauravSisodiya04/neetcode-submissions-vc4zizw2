class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (!nums || nums.length === 0) return [];
      //Clarifying question: Is the array sorted ?
      // It affects the choice of program
      // Two pointers vs the map
    
    let seen = new Map();
    //We will store value: index pairs so that we return the index in the end when we find
    // another number which adds up to the target.

    for(let i = 0 ; i< nums.length ; i++){
        let complement = target - nums[i];
        if(seen.has(complement)){
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }

    return [];

    } 
}
