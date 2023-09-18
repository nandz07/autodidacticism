class UnionFind {
    constructor(n) {
      this.parent = new Array(n);
      for (let i = 0; i < n; i++) {
        this.parent[i] = i;
      }
    }
  
    find(x) {
      if (this.parent[x] === x) return x;
      return (this.parent[x] = this.find(this.parent[x]));
    }
  
    union(x, y) {
      const rootX = this.find(x);
      const rootY = this.find(y);
      if (rootX !== rootY) {
        this.parent[rootX] = rootY;
      }
    }
  }
  
  function minCostConnectPoints(points) {
    const n = points.length;
    const edges = [];
  
    // Calculate the Manhattan distance between all pairs of points and store them as edges.
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dist = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
        edges.push([i, j, dist]);
      }
    }
  
    // Sort edges by their weight (distance).
    edges.sort((a, b) => a[2] - b[2]);
  
    let minimumCost = 0;
    const uf = new UnionFind(n);
    let edgeCount = 0;
  
    for (const [u, v, weight] of edges) {
      if (uf.find(u) !== uf.find(v)) {
        uf.union(u, v);
        minimumCost += weight;
        edgeCount++;
        if (edgeCount === n - 1) {
          // We have connected all points.
          break;
        }
      }
    }
  
    return minimumCost;
  }
  
  // Example usage:
  const points = [[0,0],[2,2],[3,10],[5,2],[7,0]];
  const result = minCostConnectPoints(points);
  console.log(result); // Output the minimum cost
  