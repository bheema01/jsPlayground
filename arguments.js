function joinArgs() {
  // var args = [].join.call(arguments, ':')
  // var joinedArgs = arguments.join(':')
  var joinedArgs = Array.prototype.join.call(arguments, ':');
  console.log(joinedArgs);
}

joinArgs(1,2,3,'dog','9')

console.dir(joinArgs);
