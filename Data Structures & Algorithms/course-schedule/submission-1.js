class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let coursetaken = 0;

        let adjList = [];
        let inDegree = [];
        for(let i = 0 ; i<numCourses;i++){
            inDegree.push(0);
            adjList[i]=[];
        }

        for(let i = 0; i< prerequisites.length;i++){
            let course = prerequisites[i][0];
            let prereq = prerequisites[i][1];
            adjList[prereq].push(course);
            inDegree[course]++;
        }

        let queue = [];
        for(let i = 0 ; i < numCourses;i++){
            if(inDegree[i]===0){
                queue.push(i)
            }
        }

        while(queue.length){
            let currNode = queue.shift();
            coursetaken++;

            let neighoursList = adjList[currNode] || [];

            neighoursList?.forEach((neibhour)=>{
                inDegree[neibhour]--;
                if(inDegree[neibhour] === 0){
                    queue.push(neibhour);
                }
            });

        }

        return coursetaken === numCourses;

    }
}
