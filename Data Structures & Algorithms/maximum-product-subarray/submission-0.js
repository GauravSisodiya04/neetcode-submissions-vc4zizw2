class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        if(!nums || nums.length === 0) return 0;

        let maxSofar = nums[0];
        let minSofar = nums[0];
        let result = nums[0];

        for(let i=1; i< nums.length; i++){
            let current = nums[i];

            let tempMax = Math.max(
                current,
                current*maxSofar,
                current*minSofar
            );

            let tempMin = Math.min(
                current,
                current*minSofar,
                current*maxSofar
            );

            maxSofar = tempMax;
            minSofar = tempMin;
            result = Math.max(result, maxSofar);
        }

        return result;

    }
}
