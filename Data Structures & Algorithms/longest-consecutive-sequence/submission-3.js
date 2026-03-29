class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //first step is to create a set from the given array
        const numSet = new Set(nums);
        let longest = 0;

        for(let num of numSet){
            if(!numSet.has(num-1)){
                let length = 1;
                while(numSet.has(num+length)){
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;

    }
}
