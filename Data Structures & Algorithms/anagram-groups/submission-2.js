class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
        //Return Value- CAT strategy
        // for each string, first sort it out and use it as a key . 
        // [] / null
        if(strs === null || strs.length === 0) {
            return [[]];
        }

        function sortAndCreateKey(inputString){ // Space --> temporary for each string O(1) . Time - O(m)
            return inputString.split('').sort((a, b) => a.localeCompare(b)).join();
        }

        let mapOfStrings = {}; // SPace : O(uniqueStrings ) --> In worst case O(n)

        for(let eachString of strs){  // Time O(n) since we have to iterate over each string atleast once
            let keyOfTheMap = sortAndCreateKey(eachString); // tops --> opst
            
            if(mapOfStrings[keyOfTheMap]){
                mapOfStrings[keyOfTheMap].push(eachString);
            } else {
                mapOfStrings[keyOfTheMap] = [eachString]; // {"opst" : ["tops", "pots"]}
            }
        }

        let finalResult = []; // O(n)

        let arrayOfKeys = Object.keys(mapOfStrings); // O(n)

        for(let key of arrayOfKeys ){
            finalResult.push(mapOfStrings[key])
        }
        return finalResult;

        // Time Complexityt -- O(n) 
        // Space complexity -- O(n)

    }
}
