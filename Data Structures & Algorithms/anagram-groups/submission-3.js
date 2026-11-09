class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        if(!strs || strs.length === 0){
            return [];
        }
        const map = new Map();

        for(let eachString of strs){

            const key = eachString.split('').sort().join('');

            if(!map.has(key)){
                map.set(key, []) ; 
            }

            map.get(key).push(eachString);
        }

        return [...map.values()];
    

    }
}
