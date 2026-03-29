class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let hashTable = {
            "{":"}",
            "[":"]",
            "(":")"
        };
        let stack = [];

        if(s.length<1){
            return false;
        }

        for(let eachBracket of s){
            if(eachBracket === "(" || eachBracket === "{" || eachBracket === "["){
                stack.push(eachBracket);
            }
             if(eachBracket === ")" || eachBracket === "}" || eachBracket === "]"){
                let element = stack.pop();//{
                if(eachBracket !== hashTable[element]){
                    return false;
                }
            }
        }

        if (stack.length === 0){
            return true;
        } else return false;

    }
}
