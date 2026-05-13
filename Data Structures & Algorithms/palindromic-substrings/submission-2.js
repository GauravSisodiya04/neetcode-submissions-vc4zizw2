class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        if(!s || s.length === 0){
            return 0;
        }
        let totalCount = 0;

        function expandOutwards(s, left, right){
            let count = 0;
            while(left>=0 && right<=s.length-1 && s[left] === s[right]){
                count++;
                left--;
                right++;
            }
            return count;
        }
        for(let i = 0; i<= s.length-1 ; i++){
            totalCount = totalCount+ expandOutwards(s,i,i) + expandOutwards(s,i,i+1);
        }
        return totalCount;
    }
}
