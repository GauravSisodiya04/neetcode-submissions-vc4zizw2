class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let finalResults = [];

        function dfs(index, path, remaining){

            //Base case 1 is the target/remaining total is now 0
            if(remaining === 0 ){
                finalResults.push([...path]);
                return;
            }

            if(remaining<0 || index === nums.length){
                return;
            }

            // choice 1 -- Use the current number, push it to the path and check 
            path.push(nums[index]);
            dfs(index, path, remaining-nums[index]);
            path.pop();

            //choice 2 --> Skip the current number and dont look back, try out new combinations
            dfs(index+1, path, remaining);
        }
        
        dfs(0, [], target);

        return finalResults;
    }
}
