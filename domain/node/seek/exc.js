const { exec } = require('child_process');

exec('dir', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  console.log('Command Output (stdout):');
  console.log(stdout);

  if (stderr) {
    console.error('Command Error (stderr):');
    console.error(stderr);
  }
});
