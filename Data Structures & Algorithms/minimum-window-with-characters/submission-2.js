class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // There are few problems we need to solve 
        // ADOBECODEBANC --. Lets find the shortest string having ABC , Answer is BANC

        // We need to keep track of frequency of each letter in the target substring
        // This is sliding window problem thus we will use left and right pointers
        // will keep the result in an array = [lengthOfSubstring, leftIndex, rightIndex]

        if(s===null || t === null || s.length === 0 || t.length === 0 || t.length > s.length){
            return "";
        }

        let result = [0,0];
        let minumumLengthSofar = Infinity;
        let left = 0;

        let formedLength = 0;
        let neededLength = 0;

        let targetMap = {};
        let windowMap = {};

        for(let eachCharInTarget of t){
            targetMap[eachCharInTarget] = (targetMap[eachCharInTarget] ?? 0) + 1;
        }

        neededLength = Object.keys(targetMap).length;  // complexity is - Time is O(t) , space is O(t)


        for(let right = 0 ; right < s.length ; right++){
            let currChar = s[right];

            windowMap[currChar] = (windowMap[currChar] ?? 0) + 1;

            if(targetMap[currChar] && windowMap[currChar] === targetMap[currChar]){
                formedLength++;
            }

            while(formedLength === neededLength){
                let currentLength = right -left + 1;

                if(currentLength < minumumLengthSofar){
                    minumumLengthSofar = currentLength;
                    result[0] = left;
                    result[1] = right;
                }
                //We have got our accepted parent window, lets shorten it to find the smallest
                windowMap[s[left]] = windowMap[s[left]] - 1;

                if(targetMap[s[left]] && windowMap[s[left]] < targetMap[s[left]]){
                    formedLength--;
                }
                left++;
            }
        }

        let returnValue = minumumLengthSofar === Infinity ? "" : s.substring(result[0], result[1] + 1);
        return returnValue; //Time complexity O(s), creates a new string as well but we dont count space complexity of result
    //Total time complexity of program
    // O(s + t)  
    // Space complexity O(s+t) , in worst case, both contain unique characters and both lengths are same
    }
}
