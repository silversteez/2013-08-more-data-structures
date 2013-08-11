var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  if(this._percentFull() >= 0.75){
    this._changeStorage(true);
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === undefined){
    var Pairs = [];
  } else {
    var Pairs = this._storage.get(i);
  }
  var duplicateKey = _.reduce(Pairs, function(isDuplicate, pair){
    if(pair[0] === k){
      pair[1] = v;
      return true;
    }
  }, false);
  if (!duplicateKey) {
    var keyValPair = [k,v];
    Pairs.push(keyValPair);
    this._storage.set(i, Pairs);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var Pairs = this._storage.get(i);
  if (Pairs) {
    for (var j = 0; j < Pairs.length; j++) {
      if (Pairs[j][0] === k) {
        return Pairs[j][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k){
  if(this._percentFull() <= 0.25){
    this._changeStorage(false);
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  var Pairs = this._storage.get(i);
  if (Pairs) {
    for (var j = 0; j < Pairs.length; j++) {
      if (Pairs[j][0] === k) {
        Pairs.splice(j, 1);
        if (Pairs.length < 1) {
          this._storage.set(i, undefined);
        }
      }
    }
  }
};

HashTable.prototype._percentFull = function(){
  var i = 0;
  this._storage.each(function(value){
    if(value !== undefined){
      i++;
    }
  });
  return (i / this._limit);
};

HashTable.prototype._changeStorage = function(shouldExpand){
  if (shouldExpand) {
    this._limit *= 2;
  } else { //then reduce
    this._limit /= 2;
  }
  var oldStorage = this._storage;
  this._storage = makeLimitedArray(this._limit);
  var hashTable = this;
  oldStorage.each(function(value){
    if (value !== undefined) {
      for (var i = 0; i < value.length; i++) {
        hashTable.insert(value[i][0], value[i][1]);
      }
    }
  });
}