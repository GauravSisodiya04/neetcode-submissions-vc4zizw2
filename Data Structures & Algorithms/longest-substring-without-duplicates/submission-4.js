class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        //We will use the sliding window pattern

    if(s===null || s.length ===0){
        return 0;
    }
    let left = 0;
    let maxLength = 0;
    let visited = new Set();

    for(let right = 0; right < s.length ; right++){

        while(visited.has(s[right])){
            visited.delete(s[left]);
            left++;
        }

        visited.add(s[right]);
        maxLength = Math.max(maxLength, right-left+1);
    }

    return maxLength;
   
}
}
