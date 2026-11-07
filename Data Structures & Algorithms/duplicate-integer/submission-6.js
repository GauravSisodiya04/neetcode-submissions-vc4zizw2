class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        if (!nums || nums.length === 0){
            return false;
        }

        let hashSet = new Set();

        for (let num of nums){
            if(hashSet.has(num)){
                return true;
            }else{
                hashSet.add(num);
            }
        }

        return false;

    }
}
