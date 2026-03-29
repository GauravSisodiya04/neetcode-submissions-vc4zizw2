class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //Approach 1 -- We will sort each string and map it to the sorted version
        //let results = [];
        if(strs === null) return false;
        let groups = new Map();

        for(let eachString of strs){
            let sortedKey = eachString.split('').sort().join('');
            if(!groups.has(sortedKey)){
                groups.set(sortedKey, []);
            }
            groups.get(sortedKey).push(eachString);
        }

        return Array.from(groups.values());
    }
}
