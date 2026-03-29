class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const map = new Map();
        map.set(s.length, 1);
        return this.dfs(s, 0, map);
    }

    dfs(s, i, map){
        if(map.has(i)){
            return map.get(i);
        }

        if(s.charAt(i)=== '0'){
            return 0;
        }

        let res = this.dfs(s, i+1, map);

        if(
            i+1<s.length && (s.charAt(i) === '1' ||
            (s.charAt(i) === '2' && s.charAt(i+1)<'7'))

        ){
            res += this.dfs(s, i+2, map);
        }
        map.set(i, res);
        return res;

    }
}
