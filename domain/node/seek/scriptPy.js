const { spawn } = require('child_process');

// Run the Python script
const pythonProcess = spawn(__dirname, ['script.py']);

// Event handler for the stdout stream
pythonProcess.stdout.on('data', (data) => {
  console.log(`Message from Python: ${data.toString().trim()}`);
});

// Event handler for the stderr stream
pythonProcess.stderr.on('data', (data) => {
  console.error(`Error from Python: ${data.toString().trim()}`);
});

// Event handler for the close event
pythonProcess.on('close', (code) => {
  console.log(`Python process exited with code ${code}`);
});
