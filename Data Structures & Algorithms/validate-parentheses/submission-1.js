class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // We create a map of closing brackets
        if(s === null || s.length < 2 || s.length % 2 !== 0){
            return false;
        }
        let stack = [];
        let bracketsMap = {
            ")" : "(",
            "]" : "[",
            "}" : "{"
        };

        for(let i = 0 ; i< s.length ; i++){
            // If we come across a closing bracket. we need to check if we have a corresponding opening bracket in stack
            let curr = s[i];
            if(bracketsMap[curr]){
                let topElement = null;
                if(stack.length){
                    topElement = stack.pop();
                }
                if(topElement !== bracketsMap[curr]){
                    return false;
                }
            }else{
                stack.push(curr);
            }
        }

        return stack.length === 0;


    }
}
