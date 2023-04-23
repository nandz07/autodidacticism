
class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
        this.AdjList.set(v, []);
    }
    addEdge(v, w) {
        // if(!this.AdjList[v]){
        //     this.addVertex(v)
        // }
        // if(!this.AdjList[w]){
        //     this.addVertex(w)
        // }
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }
    printGraph() {
        var get_keys = this.AdjList.keys();
        for (var i of get_keys) {
            var get_values = this.AdjList.get(i);
            var conc = "";
            for (var j of get_values)
                conc += j + " ";
            console.log(i + " -> " + conc);
        }
    }
}
var g = new Graph(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F','F'];

for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
console.log(g);
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
// g.addEdge('Z', 'Y');
console.log(g);
g.printGraph();


