class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       //If they have different length, return early, cant be an anagram

       if(s == null || t == null){
        return false;
       }
       if (s.length === 0 && t.length === 0){
        return true;
       }

       if(t.length !== s.length){
        return false;
       }

       if (s.split('').sort().join('') === t.split('').sort().join('')){
        return true;
       }

       return false;
    }
}
