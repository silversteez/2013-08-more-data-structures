describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should be able to add value and return that value", function(){
    linkedList.addToTail(0);
    expect(0).toEqual(linkedList.removeHead());
  });

  it("'contains' should return a specified value", function(){
    linkedList.addToTail(0);
    expect(linkedList.contains(0)).toEqual(true);
  });

  it("should be able to add three values and return the each value", function(){
    linkedList.addToTail(0);
    linkedList.addToTail("hello");
    linkedList.addToTail({ key : "value" });
    expect(linkedList.removeHead()).toEqual(0);
    expect(linkedList.removeHead()).toEqual("hello");
    expect(linkedList.removeHead()).toEqual({ key : "value" });
  });

  it("should return undefined if removeHead is called on an empty list", function() {
    expect(linkedList.removeHead()).toEqual(undefined);
  });
});