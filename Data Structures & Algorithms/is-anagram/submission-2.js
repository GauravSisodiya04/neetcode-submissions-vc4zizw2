class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       //If they have different length, return early, cant be an anagram

       if(s === null || t===null){
        return false;
       }
       if(s.length !== t.length){ // early return
        return false;
       }

       let charMap = new Map();

       for(let charInS of s){
        charMap.set(charInS, (charMap.get(charInS)??0)+1);
       }

       for(let charInT of t){
        if(!charMap.has(charInT)){
            return false;
        }

        charMap.set(charInT, charMap.get(charInT)-1);

        if(charMap.get(charInT)<0){
            return false;
        }
       }

       return true;

    }
}
