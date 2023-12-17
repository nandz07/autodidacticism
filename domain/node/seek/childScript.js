process.stdout.write('Hello from the child process!\n');
console.log('hai');

// Send a message to the parent process
process.send('Message from the child process');
