function makeFunc(greet) {
  return function displayName(name) {
    console.log(greet + ' ' + name);
  }
}

makeFunc('hello')('sasi');