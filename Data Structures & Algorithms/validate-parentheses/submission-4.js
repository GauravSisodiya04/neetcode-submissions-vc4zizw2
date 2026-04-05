class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        
        if(s===null || s.length <2 || s.length%2 !==0 ){
            return false;
        }

        let bracketsMap = {
            "}" : "{",
            "]" : "[",
            ")" : "("
        }

        let stack = [];

        for( let currChar of s){
            //if its an closing bracket, check for its corresponding open bracket from the top of stack
            if(bracketsMap[currChar]){
                if(stack.length){
                    let topOfStack = stack.pop();
                    if(topOfStack !== bracketsMap[currChar]){
                        return false;
                    }
                }else{
                   stack.push(currChar); 
                }
            } else {
                stack.push(currChar);
            }
        }
        return stack.length === 0;
    }

}
