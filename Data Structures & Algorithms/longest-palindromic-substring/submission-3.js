class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if(!s || s.length === 0) {
            return "";
        }
        // current maximum indexes we have
        let start = 0;
        let end = 0;
        // aba
        for(let i =0; i< s.length ; i++){
            let length1 = expandOutwards(s, i, i); // our palindrome is odd length
            let length2 = expandOutwards(s, i , i+1); //our palindrome is even length
            let curentMaxLength = Math.max(length1, length2);
            let prevMaxLength = end-start + 1;
            if(curentMaxLength > prevMaxLength){
                //We have gotten a bigger palindrome and we need to get the start and ends
                end = i + Math.floor(curentMaxLength/2);      //3
                start = i - Math.floor((curentMaxLength - 1)/2) ;
            }
        }

        function expandOutwards(s, left, right){
            while(s[left] === s[right] && left >= 0 && right < s.length ){
                left--;
                right++;
            }
            return ((right -1) - (left+1) + 1);
        }

        return s.substring(start, end+1);
    }
}

