class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        //We will use the sliding window pattern
     if(s===null || s.length ===0)
     {
        return 0;
     }
     let left = 0;
     let maxLength = 0;
     let freqMap = new Map();

     for(let right = 0; right < s.length ; right++){
        let currChar = s[right];
        if(freqMap.has(currChar)){
            let newLeftIndex = freqMap.get(currChar)+1;
            left = Math.max(left , newLeftIndex);
        }
        freqMap.set(currChar, right);
        let currLength = right - left +1 ;
        maxLength = Math.max(currLength, maxLength);
     }

     return maxLength;   
}
}
