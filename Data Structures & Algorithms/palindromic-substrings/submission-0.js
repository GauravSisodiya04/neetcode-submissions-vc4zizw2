class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let countOfPallindromes = 0;

        for(let i = 0 ; i<=s.length-1; i++){ 
            countOfPallindromes = countOfPallindromes+ expandOutwards(s,i, i)+ expandOutwards(s, i, i+1);
        }

        function expandOutwards(s, left, right){
            let isPalindrome = 0;
            while(s[left] === s[right] && left>=0 && right< s.length){
                isPalindrome++;;
                left--;
                right++;
            }
            return isPalindrome;;
        }
         return countOfPallindromes;
    }

   
}
