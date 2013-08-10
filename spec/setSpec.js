describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should be able to add a value and check if the set contains that value", function(){
    set.add('cake');
    expect(set.contains('cake')).toEqual(true);
  });

  it("should be able to remove a value and see that the value is no longer in the set", function(){
    set.add('cake');
    set.remove('cake');
    expect(set.contains('cake')).toEqual(false);
  })

  it("should add three values and remove two of them successfully", function(){
    set.add('cake');
    set.add('pie');
    set.add('cobbler');
    set.remove('pie');
    set.remove('cobbler');
    expect(set.contains('pie')).toEqual(false);
    expect(set.contains('cobbler')).toEqual(false);
    expect(set.contains('cake')).toEqual(true);
  })
});