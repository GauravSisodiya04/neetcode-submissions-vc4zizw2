class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // [1,1,1,2,2,3,4]

        let placeHolderArray = Array.from({length:nums.length+1}, ()=>[]); // O(n)

        let placeHolderFreqMap = new Map(); //O(n)
        let result = [];

        for(let eachNumber of nums){
            placeHolderFreqMap.set(eachNumber,((placeHolderFreqMap.get(eachNumber)??0)+1));
        }

        //I want to run the loop on the values of the object and push the key into an array whose index is the value of an entry in the map0

        for(let [key, value] of placeHolderFreqMap){
            placeHolderArray[value].push(key);
        }

        for(let i = nums.length ; i>0; i--){
            if(placeHolderArray[i].length){
                for(let eachNumber of placeHolderArray[i]){
                result.push(eachNumber);
                if(result.length === k){
                    return result;
                }
                }
            }
        }

        return [];
        
    }
}
