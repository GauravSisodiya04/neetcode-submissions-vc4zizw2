class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        //using two pointers apporoach, we can solve this

        if(numbers === null || numbers.length<2){
            return [];
        }
        let left = 0;
        let right = numbers.length-1;

        while(left<right){
            let sum = numbers[left]+numbers[right];
            if(sum===target){
                return [left+1,right+1];
            } else if(sum>target){
                right--;
            } else{
                left++;
            }
        }
    }
}
