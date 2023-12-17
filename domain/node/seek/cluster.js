const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  // Fork workers based on the number of CPU cores
  const numCPUs = os.cpus().length;
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Code to run in each worker process
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World\n');
  });

  server.listen(3000, () => {
    console.log(`Worker ${process.pid} started`);
  });
}
