class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if ( !s || s.length ===0 || !t || t.length === 0){
            return false;
        }

        // the first condition is their lengths should be same
        if(s.length !== t.length) {
            return false;
        }

        let charMapOfs = {};
        let charMapOft = {};

        for(let char of s){
            if(charMapOfs[char]){
                charMapOfs[char] =  charMapOfs[char] + 1;
            } else {
                charMapOfs[char] = 1;
            }
        }

        for(let char of t){
            if(charMapOft[char]){
                charMapOft[char] =  charMapOft[char] + 1;
            } else {
                charMapOft[char] = 1;
            }
        }


        for(let eachCharInS of Object.keys(charMapOfs) ) {
            if( !charMapOft[eachCharInS]){
                return false;
            } else if (charMapOft[eachCharInS] !== charMapOfs[eachCharInS]) {
                return false;
            }
        }

        return true;

    }
}
