const { fork } = require('child_process');

const childProcess = fork('childScript.js');

childProcess.on('message', (message) => {
  console.log(`Message from child process: ${message}`);
});
