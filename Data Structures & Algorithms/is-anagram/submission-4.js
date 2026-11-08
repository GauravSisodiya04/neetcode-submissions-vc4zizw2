class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(!s || !t){
            return false
        }

        if(s.length === 0 && t.length === 0 ){
            return true;
        }

        // carrace and racecar --> c2a2r2e1

        let counter = {};


        for(let char of s){
            counter[char] = (counter[char]||0)+ 1;
        }

        for(let char of t){
            counter[char] = (counter[char]||0) - 1;
        }

        for(let key of Object.keys(counter)){
            if (counter[key] !== 0){
                return false;
            }
        }

        return true;


    }
}