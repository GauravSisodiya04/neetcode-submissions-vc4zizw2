class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s===null || s.length<0){
            return false;
        }
        //We need to only check for alphanumeric characters
        s = s.toLowerCase().replace(/[^a-z0-9]/g,''); // This happens in O(n) time and takes O(n) space

        //s is sanitized , so its safe to say the same
        if(s.length ===1){
            return true;
        }
        //Lets run two pointers, left and right . If we come across a different character, we exit else its valid

        let left =0;
        let right = s.length-1;

        while(left<=right){
            let charAtLeft = s[left];
            let charAtRight = s[right];

            if(charAtLeft !== charAtRight){
                return false;
            }
            left++;
            right--;
        }
        return true;

    }
}
