var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(value){
  this._storage[value] = true;
};

setPrototype.contains = function(value){
  for(var key in this._storage){
    if(key === value){
      return true;
    };
  };
  return false;
};

setPrototype.remove = function(value){
  for(var key in this._storage){
    if(key === value){
      delete this._storage[value];
    };
  };
};