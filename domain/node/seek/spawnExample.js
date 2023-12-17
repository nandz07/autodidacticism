const spawn = require('cross-spawn');
// const { spawn } = require('child_process');
// Specify the command and arguments (ls -l -a for listing all files with details)
const command = 'dir';
// const args = ['/D'];

// Spawn the child process
const childProcess = spawn(command);

// Event handler for stdout (standard output)
childProcess.stdout.on('data', (data) => {
  console.log(`Child process output: ${data}`);
});

// Event handler for stderr (standard error)
childProcess.stderr.on('data', (data) => {
  console.error(`Child process error: ${data}`);
});

// Event handler for the close event (exit code)
childProcess.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});
