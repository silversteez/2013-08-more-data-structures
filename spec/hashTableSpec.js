describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert', 'retrieve', and 'remove'", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
    expect(hashTable.remove).toEqual(jasmine.any(Function));
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  it("should be able to remove values", function() {
    hashTable.insert("johnson", "a hard worker");
    expect(hashTable.retrieve("johnson")).toEqual("a hard worker");
    hashTable.remove("johnson");
    expect(hashTable.retrieve("johnson")).toEqual(undefined);
  });

  it("should properly expand to handle more values than the original size limit", function() {
    var key = 'adsf';
    for(var i=0; i < 100; i++){
      key += 'bsdsdf svnie';
      hashTable.insert(key, key);
      expect(hashTable.retrieve(key)).toEqual(key);
    };
  });

  it("should properly reduce storage size to conserve memory", function() {
    var key = 'adsf';
    for(var i=0; i < 100; i++){
      key += 'bsdsdf svnie';
      hashTable.insert(key, key);
    };
    key = 'adsf';
    for(var j=0; j < 100; j++){
      key += 'bsdsdf svnie';
      if (j < 90) {
        hashTable.remove(key);
      } else {
        expect(hashTable.retrieve(key)).toEqual(key);
      }
    };
  });

});
