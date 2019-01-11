// Asynchronous - more that one at a time
// Synchronous - one at a time; Javascript is synchronous;
function greet(callback) {
  console.log('Hello there');
  const data = {
    name: 'Jon Doe'
  }
  callback(data); // invoke callback fn with data
}

greet(function(data) {
  console.log(`Hello ${data.name} from Callback fn()`);
});