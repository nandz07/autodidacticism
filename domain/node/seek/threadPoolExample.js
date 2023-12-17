const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const os = require('os');

if (isMainThread) {
    console.log(`Main thread: ${process.pid}`);
  } else {
    console.log(`Worker thread: ${process.pid}`);
  }
  

  if (isMainThread) {
    const numCPUs = os.cpus().length;
    console.log(`Creating a thread pool with ${numCPUs} threads.`);
  
    for (let i = 0; i < numCPUs; i++) {
      const worker = new Worker(__filename);
      console.log(`Worker thread created: ${worker.threadId}`);
    }
  }
  
  function performTask(workerData) {
    // Simulate a time-consuming task (e.g., computation)
    const result = workerData * 2;
  
    // Simulate an asynchronous result (e.g., send result back to the main thread)
    setTimeout(() => {
      parentPort.postMessage(result);
    }, 1000);
  }

  if (!isMainThread) {
    parentPort.on('message', (message) => {
      console.log(`Received message in worker thread: ${message}`);
      performTask(message);
    });
  }

  if (isMainThread) {
    for (let i = 0; i < 5; i++) {
      const worker = new Worker(__filename);
      worker.postMessage(i);
      
    }
  }
  
  