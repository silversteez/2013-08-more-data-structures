describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should be able to create a root node", function(){
    var boss = tree.addChild(0);
    expect(tree.contains(0)).toBe(true);
  });

  it("should be able to find a particular value in the tree", function(){
    var boss = tree.addChild('Steve');
    var CTO = boss.addChild('Harvey');
    var CEO = boss.addChild('Frank');
    var manager = CTO.addChild('Jenny');
    expect(tree.contains('Steve')).toBe(true);
    expect(tree.contains('Harvey')).toBe(true);
    expect(tree.contains('Jenny')).toBe(true);
    expect(tree.contains('Victor')).toBe(false);
  });
});