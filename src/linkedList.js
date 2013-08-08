// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var index = -1;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    index++;
    list[index] = newNode;
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    return list[index].value;
  };

  list.contains = function(value){
    for(var key in list){
      if (list[key].value === value){
        return true;
      }
    }
    return false;
  };
  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};