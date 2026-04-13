class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       // Create a HashSet

       let visited = new Set();

       for(let eachNum of nums){
       if(visited.has(eachNum)){
        return true;
       } 
        visited.add(eachNum)
       
       }

       return false;

    }
}
