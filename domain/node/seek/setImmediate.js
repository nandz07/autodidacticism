console.log('Start of script');

setImmediate(() => {
  console.log('Inside setImmediate callback');
});

setTimeout(() => {
    console.log('settimeout');
}, 0);

console.log('End of script');
