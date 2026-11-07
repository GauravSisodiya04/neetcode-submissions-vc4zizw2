class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        
        let set = new Set(nums); //O(n) time

        if (nums.length !== set.size) {
            return true;
        }
        return false;

    }
}
