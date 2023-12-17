console.log('Start of script');

process.nextTick(() => {
  console.log('Inside process.nextTick callback');
});

setImmediate(() => {
  console.log('Inside setImmediate callback');
});

console.log('End of script');
