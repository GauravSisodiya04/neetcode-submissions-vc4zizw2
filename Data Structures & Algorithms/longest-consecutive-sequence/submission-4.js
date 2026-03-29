class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //first step is to create a set from the given array
       //The strategy is to find a starting of a sequence

       let currentLongestSequence = 0;

       if(nums === null) return 0;
       let uniqueElements = new Set(nums); //O(n) operation if all elements are unique
       
       for(let i = 0; i<nums.length ; i++){
        //Check if the current element is start of a sequence
        //It is a start of the sequence
        let begin = nums[i];
        let currentSequence = 0;
        if(!uniqueElements.has(nums[i]-1)){
        while(uniqueElements.has(begin)){
            begin = begin+1;
            currentSequence++;
        }
        currentLongestSequence = Math.max(currentLongestSequence, currentSequence);
        }
       }
       return currentLongestSequence;

    }
}
