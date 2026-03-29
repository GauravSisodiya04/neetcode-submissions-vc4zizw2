class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       //If they have different length, return early, cant be an anagram

       if(!s || !t){
        return false;
       }
       if(s.length !== t.length){
        return false;
       }

       let mapForString1 = new Map();
       let mapForString2 = new Map();

       for(let i = 0 ;i<s.length; i++){
            let currentFrequency = mapForString1.get(s[i]) || 0;
            mapForString1.set(s[i],currentFrequency+1);
       }

       for(let i = 0 ;i <t.length; i++){
        let currentFrequency = mapForString2.get(t[i]) || 0;
        mapForString2.set(t[i], currentFrequency +1);
       }

       for(let i =0; i< t.length; i++){
        if(!mapForString1.has(t[i])){
            return false;
        }
        if(mapForString1.get(t[i]) !== mapForString2.get(t[i])){
            return false;
        }
       }

       return true;
    }
}
