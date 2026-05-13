class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if(!s || s.length === 0){
            return "";
        }
        let maxLength = 0;
        let start =0;
        let end = 0;

        function expandOutwards(s, left, right){
            while(left>=0 && right<=s.length-1 && s[left] === s[right]){
                left--;
                right++;
            }
            left = left+1; // after exiting the loop, the values are off by 1 since last iteration got them out of bound or mismatch
            right = right-1;
            return right-left+1;
        }

        for(let i = 0; i<= s.length-1 ; i++){
            let maxOdd = expandOutwards(s,i,i);
            let maxEven = expandOutwards(s,i,i+1);

            let currMaxLength = Math.max(maxOdd, maxEven);

            if(currMaxLength>maxLength){
                maxLength = currMaxLength;
                //We have a longer palindrome string
                start = i - Math.floor((currMaxLength-1)/2);
                end = i + Math.floor(currMaxLength/2); 
            }

        }

        return s.substring(start, end+1);
    }
}
