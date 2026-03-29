class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // There are few problems we need to solve 
        // ADOBECODEBANC --. Lets find the shortest string having ABC , Answer is BANC

        // We need to keep track of frequency of each letter in the target substring
        // This is sliding window problem thus we will use left and right pointers
        // will keep the result in an array = [lengthOfSubstring, leftIndex, rightIndex]

        if( !s || !t || s.length === 0 ||  t.length === 0 || t.length > s.length){
            return "";
        }

        let left = 0;
        let right = 0;
        let targetMap = new Map();
        let formed = 0;
        let result = [-1, 0,0];
       
        for(let char of t){
            targetMap.set(char, ((targetMap.get(char)||0) + 1));
        }
         let requiredCount = targetMap.size;
        // We will store all the characters in the current window in this map
        let windowMap = new Map();

        while(right< s.length){
            let rightChar = s[right];

            //Add it to our current window 
            windowMap.set(rightChar, (windowMap.get(rightChar)|| 0) + 1);

            if(targetMap.has(rightChar) && windowMap.get(rightChar) === targetMap.get(rightChar)){
                formed++;
            }

            // Check if we have a valid substring which contains all the letters needed in target

            while(left <= right && formed === requiredCount){
                
                let currentSubstringLength = right - left +1;
                if(result[0] === -1 || currentSubstringLength < result[0]){
                    result = [currentSubstringLength, left, right];
                }
                let leftChar = s[left];
                windowMap.set(leftChar, windowMap.get(leftChar) - 1);

                if(targetMap.get(leftChar) && windowMap.get(leftChar) < targetMap.get(leftChar)){
                    formed--;
                }
                left++;
            }
            right++;
        }
    return result[0] === -1 ? "": s.substring(result[1], result[2]+1);

    }
}
