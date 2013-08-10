var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(i);
  if(this._storage.get(i) === undefined){
    var collisionArr = [];
    var keyValPair = [];
    keyValPair.push(k);
    keyValPair.push(v);
    collisionArr.push(keyValPair);
    this._storage.set(i, collisionArr);
  } else {
    var collisionArr = this._storage.get(i);
    var keyValPair =  [];
    keyValPair.push(k);
    keyValPair.push(v);
    collisionArr.push(keyValPair);
    this._storage.set(i, collisionArr);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var collisionArr = this._storage.get(i);
  for (var i = 0; i < collisionArr.length; i++) {
    if (collisionArr[i][0] === k) {
      return collisionArr[i][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(i);
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
