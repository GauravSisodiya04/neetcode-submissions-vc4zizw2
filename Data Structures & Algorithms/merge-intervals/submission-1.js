class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (intervals.length < 2) return intervals;

        let result = [];

        intervals.sort((a, b)=> a[0] - b[0]);

        let current = intervals[0];
        result.push(current);

        for(let i = 1; i< intervals.length ; i++){
            let next = intervals[i];

            //check for a overlap

            if(next[0] <= current[1]){
                current[1] = Math.max(current[1], next[1]);
            } else {
                current = next ;
                result.push(current);
            }
        }

        return result;


    }
}
