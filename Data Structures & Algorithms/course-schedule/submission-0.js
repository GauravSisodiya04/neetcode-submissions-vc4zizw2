class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // Lets treat these as graph nodes
        // We will create adj list and inDegree arrays to represent nodes and their directed edges
        let coursesTaken = 0;
        let adj = Array.from({length: numCourses}, ()=>[]);
        let inDegree = new Array(numCourses).fill(0);

        // If a node has a edge coming in, it has a degree
        // Lets populate

        for(let [course, pre] of prerequisites){
            adj[pre].push(course);
            inDegree[course]++;
        }

        // Above is the little confusing for now but it will get better with more practice
        // check which course we can take 
        let queue = [];

        for(let i =0;i<numCourses; i++){
            if(inDegree[i]===0){
                queue.push(i);
            }
        }

        while(queue.length>0){
            let current = queue.shift();
            coursesTaken++;
            // We need to check the neighbors of current and update their indegree

            for(let neibhbor of adj[current]){
                inDegree[neibhbor]--;
                if(inDegree[neibhbor] === 0){
                    queue.push(neibhbor)
                }

            }


        }
        return numCourses === coursesTaken;
    }
}
