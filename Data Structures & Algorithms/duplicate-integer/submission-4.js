class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        if (!nums || nums.length === 0){
            return false;
        }

        let set = new Set(nums); //O(n) time

        if (nums.length !== set.size) {
            return true;
        }
        return false;

    }
}
