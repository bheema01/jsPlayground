let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

promise
  .then(() => console.log('Then it happened'))
  .catch(() => console.log('Catch happened'));