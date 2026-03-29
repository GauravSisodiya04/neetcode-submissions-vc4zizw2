class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //first step is to create a set from the given array

        let uniqueElements = new Set(nums); // O(n)
        let sequences = {};
        let currentSequenceLength = 0
        let overallMaxSequenceLength =0;
        let keyOfLargestSequence;

        // ? How to store sequences ?? may be an object, an index and its length

        // start iterating over the array and create sequences;

        for(let i =0; i< nums.length ; i++){
            //check if the current element has the left neibhour
            let leftNeighour = nums[i] - 1;
            currentSequenceLength = 0;
            if(uniqueElements.has(leftNeighour)){
                continue;
            }else{
                if(sequences[i] === undefined){
                    sequences[i] = [];
                }
                sequences[i].push(nums[i]);
                let nextElement = nums[i]+1;
                currentSequenceLength++;
                while(uniqueElements.has(nextElement) && i<nums.length){
                    sequences[i].push(nextElement);
                    currentSequenceLength++;
                    nextElement = nextElement+1;
                }
                if(overallMaxSequenceLength<currentSequenceLength){
                    overallMaxSequenceLength=currentSequenceLength;
                    keyOfLargestSequence = i;
                }
            }
        }
        return (sequences[keyOfLargestSequence] && sequences[keyOfLargestSequence].length) || 0;

    }
}
