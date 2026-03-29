class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        // [1,2]  --> Before our interval starts
        //[3,5] , [6, 7] , [8,10] , --> Overlapping
        // [12 , 16]  --> After our interval ends
        // new interval = [4, 8]

        //Step 1 : Just push all the intervals which will end before our new interval starts

        let i = 0;
        let result = [];
        let n = intervals.length;

        while(i<n && intervals[i][1] < newInterval[0]){
            result.push(intervals[i]);
            i++;
        }

        //Step 2: Since we have pushed all the before intervals into array, we should be left with overlapping intervals
        // When overlap happens
        // When the currentIntervals start before the new interval ends
        while(i<n && intervals[i][0] <= newInterval[1]){
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }
        result.push(newInterval);

        while(i<n){
            result.push(intervals[i]);
            i++;
        }
    return result;
    }
    
}
