class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0;
        let left = 0;
        //let right = 0;
        let charSet = new Set();
        for(let right = 0; right< s.length; right++){
                while(charSet.has(s[right])){
                    charSet.delete(s[left]);
                    left++;
                }

                charSet.add(s[right]);

                let curLength = right - left + 1;

                maxLength = Math.max(maxLength , curLength);
        }
        return maxLength;
    }
}
