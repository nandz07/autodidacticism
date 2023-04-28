
// class Graph{
//     constructor(){
//         this.adjList=new Map()
//     }
//     addVertex(vertex){
//         if(!(vertex in this.adjList)){
//             this.adjList[vertex]=new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!(vertex1 in this.adjList)){
//             this.addVertex(vertex1)
//         }
//         if(!(vertex2 in this.adjList)){
//             this.addVertex(vertex2)
//         }
//         this.adjList[vertex1].add(vertex2)
//         this.adjList[vertex2].add(vertex1)
//     }
//     display(){
//         for(let vertex in this.adjList){
//             console.log(`${vertex} -> ${[...this.adjList[vertex]]}`);
//         }
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjList[vertex1].delete(vertex2)
//         this.adjList[vertex2].delete(vertex1)
//     }
//     remove(vertex){
//         if(!this.adjList[vertex]){
//             return null
//         }
//         for(let adjVertx of this.adjList[vertex]){
//             this.removeEdge(vertex,adjVertx)
//         }
//         delete this.adjList[vertex]
//     }
//     bfs(v){
//         let queue=[]
//         let visited=new Set()
//         queue.push(v)
//         while(queue.length){
//             let curr=queue.shift()
//             visited.add(curr)
//             for(let adjVertx of this.adjList[curr]){
//                 if(!visited.has(adjVertx)){
//                     queue.push(adjVertx)
//                     visited.add(adjVertx)
//                 }
//             }
//         }
//         let temp=''
//         visited.forEach(element=>{
//             temp+=`${element} `
//         })
//         console.log(temp);
//     }

// }
// let g=new Graph()
// g.addVertex('A')
// g.addVertex('B')
// g.addEdge('A','B')
// g.addEdge('C','B')
// // g.remove('B')
// g.display()
// g.bfs('C')

class Graph{
    constructor(){
        this.adjList=new Map()
    }
    addVertex(vertex){
        if(!(vertex in this.adjList)){
            this.adjList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!(vertex1 in this.adjList)){
            this.addVertex(vertex1)
        }
        if(!(vertex2 in this.adjList)){
            this.addVertex(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjList){
            console.log(`${vertex} -> ${[...this.adjList[vertex]]}`);
        }
    }
    removeVertex(vertex1,vertex2){
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    remove(vertex){
        if(!this.adjList[vertex]){
            return null
        }
        for(let adjVertx of this.adjList[vertex]){
            this.removeVertex(adjVertx,vertex)
        }
        delete this.adjList[vertex]
    }
    bfs(v){
        let queue=[]
        let visited=new Set()
        queue.push(v)
        while(queue.length){
            let curr=queue.shift()
            visited.add(curr)
            for(let adjVertex of this.adjList[curr]){
                if(!visited.has(adjVertex)){
                    queue.push(adjVertex)
                    visited.add(adjVertex)
                }
            }
        }
        let temp=''
        visited.forEach(item=>{
            temp+=`${item} `
        })
        console.log(temp);
    }
}
let g=new Graph()
g.addVertex('a')
g.addVertex('b')
g.addVertex('c')
g.addEdge('a','b')
g.addEdge('c','b')
g.display()
// g.remove('b')
// g.display()
g.bfs('c')