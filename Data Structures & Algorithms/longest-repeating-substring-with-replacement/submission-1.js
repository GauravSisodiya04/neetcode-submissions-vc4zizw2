class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // AABCD,  k=2 
        let left = 0;
        let maxLength = 0;
        let maxFrequency = 0;
        let frequencyMap = {};

        for(let right = 0; right < s.length; right++){

            //As soon as I see a new characted , I add it or update its count in my frequenyc Map

            let currentChar = s[right];
            
            frequencyMap[currentChar] = (frequencyMap[currentChar] || 0) + 1;

            //update my frequency of the currentChar, the more the same characters I see , better for me since i need 
            // fewer than K replacements

            maxFrequency = Math.max(maxFrequency, frequencyMap[currentChar]);

            let currentLength = (right - left) + 1;
            // At my current length of string, after removing the most frequent letter, I am left with imposters
            // if that number is greater than the replacements I have, I cannot continue, I need to update my left
            // and also remove that char from my window which decreases length of my current window
            if(currentLength - maxFrequency > k) {
                --frequencyMap[s[left]];
                ++left;
            }
            //If above if has executed, it has updated our left pointer, need to update our length
            let updatedLength = left - right + 1
            // No matter what, I compare my current length with previous maxLength so that I can track the length correctly
            maxLength = Math.max(maxLength, right-left+1);

        }
        return maxLength;

    }
}
