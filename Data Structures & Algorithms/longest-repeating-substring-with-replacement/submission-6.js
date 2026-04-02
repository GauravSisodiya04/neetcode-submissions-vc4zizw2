class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
       
       if(s === null || s.length ===0 ){
            return 0;
       }

       let maxLength = 0;
       let left = 0;
       let frequencyMap = new Map();
       let maxFrequencyOfAnyChar = 0;

       for(let i = 0; i<s.length; i++){
        let currChar = s[i];
        frequencyMap.set(currChar, (frequencyMap.get(currChar) ?? 0 )+ 1);

        let currentCharFrequency = frequencyMap.get(currChar);

        maxFrequencyOfAnyChar = Math.max(currentCharFrequency,maxFrequencyOfAnyChar);

        // At this point lets calculate the length of the string we have 
        let currLength = i - left +1;

        if(currLength - maxFrequencyOfAnyChar > k){
            frequencyMap.set(s[left], (frequencyMap.get(s[left]) - 1));
            ++left;
        }
        maxLength = Math.max(maxLength, i -left+1);
       }

    return maxLength;

    }
}
