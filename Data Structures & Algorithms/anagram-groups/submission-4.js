class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        if(!strs || strs.length === 0){
            return []
        }

        let map = new Map();  // The map stores n strings . each of the length m . So Space -== O(m.n)

        for(let eachString of strs){

            let key = eachString.split('').sort().join(''); // Each step takes O(mlogm) time . m is length of each string

            if(!map.has(key)){
                map.set(key,[]);
            }
            map.get(key).push(eachString)
        }

        return [...map.values()]

        // Time complexity -- O(n.mlogm where n is total number of strings and m is lenth of each string)
        // Space Complexity -- O(n) , in worst case, the map will have n entries 

    }
}
