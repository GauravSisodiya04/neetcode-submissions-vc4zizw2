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
    //Lets optimize resetting our left pointer to the new left
    // abc
    //abcdc
    // abcabcdefg

    let charMap = new Map(); // We will store the mapping of the char and its index last seen

    for(let right = 0; right< s.length; right++){
        //Lets assume we havent seen this char yet
        let currChar = s[right];
        if(charMap.has(currChar)){
            let prevIndexOfDuplicate= charMap.get(currChar);
            let newLeft = prevIndexOfDuplicate + 1;
            left = Math.max(newLeft, left); // duplicate outside curr window

        } 
            charMap.set(currChar, right);
            maxLength = Math.max(maxLength, right-left+1);
        
    }

    return maxLength;

    
   
}
}
