class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s === null ){
            return 0;
        };
        //Lets use a set to keep the elements we have seen so far like duplicates
        // abcdbc
        let visited = new Set();
        let left =0;
        let maxLength = 0;

        for(let right = 0 ; right < s.length; right++){
            //If we see a duplicate, shrink from the left
            while(visited.has(s[right])){
                    visited.delete(s[left]);
                    left++;
            }
            visited.add(s[right]);
            maxLength = Math.max(maxLength, (right-left)+1);
        }
         return maxLength;
}
}