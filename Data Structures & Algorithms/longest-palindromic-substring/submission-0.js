class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if(!s || s.length<1){
            return "";
        }
        let currentStart = 0;
        let currentEnd = 0

        for(let i =0; i<s.length ; i++){
            let oddLength = expandOutwards(s, i, i);
            let evenLength = expandOutwards(s, i, i+1);

            let maxLength = Math.max(oddLength, evenLength);

            if(maxLength>currentEnd-currentStart){
                currentStart = i - Math.floor((maxLength-1)/2);
                currentEnd = i + Math.floor((maxLength/2))
            }
        }
        return s.substring(currentStart, currentEnd+1);

        //aba -- Odd length substring
        // abba -- Even length substring
        // a -- single letter string , we can use this single letter to come up with a function to expan outwards


        function expandOutwards(s, left, right){

            while(left>=0 && right <= s.length && s[right]=== s[left]){
                left--;
                right++;
            }
            // when the loop ends, left is actually left-- and right is right++
            // thus to calculate length
            return (right-1)-(left+1)+1;
        }

    }
}
