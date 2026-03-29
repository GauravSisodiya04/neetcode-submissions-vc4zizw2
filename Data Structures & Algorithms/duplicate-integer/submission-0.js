class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       // Create a HashSet

       let visited = new Set();

       for(let eachNumber of nums){
        if(visited.has(eachNumber)){
            return true;
        }
        visited.add(eachNumber);
       }

       return false;
    }
}
