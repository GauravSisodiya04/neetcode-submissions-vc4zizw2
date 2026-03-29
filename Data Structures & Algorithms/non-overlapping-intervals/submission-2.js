class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {

        //If no intervals return 0

        if(intervals.length === 0) {
            return 0;
        }

        //Lets start by end time . Why ? Because we want to minimize the removal of the meetings
        // Only if we have the meetings which will end sooner first, we can have maximum meetings on that day
        //[[1,2],[2,4],[1,4]]
        intervals.sort((a,b) => (a[1] -b[1]));
        // [1,2] , [2,4], [1,4]
        // [1,2] , [1,4] , [2,4]
        let removals = 0;
        let n = intervals.length;

        let current = intervals[0];

        for(let i = 1; i<n ; i++){
            let next = intervals[i];
            //check for conflict with next meeting

            if(current[1] > next[0]){
                removals++;
            } else {
                current = next;
            }

        }

        return removals;

    }
}
