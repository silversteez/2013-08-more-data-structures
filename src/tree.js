var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree,treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  this.children.push(child);
  return child;
};

treeMethods.contains = function(value){
  if(this.value === value){
    return true;
  }
  if (this.children.length) {
    for (var i = 0; i < this.children.length; i++) {
      if(this.children[i].contains(value)){
        return true;
      }
    }
  }
  return false
};