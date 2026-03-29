class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //Approach 1 -- We will sort each string and map it to the sorted version
        if(strs === null) return false;
        let keyMap = new Map();

        for(let eachString of strs){
            let sortedString = eachString.split('').sort().join('');

            if(!keyMap.has(sortedString)){
                keyMap.set(sortedString,[]);
            }
            keyMap.get(sortedString).push(eachString);
        }

        return Array.from(keyMap.values());
    }
}
