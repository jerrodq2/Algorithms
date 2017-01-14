//******************** PLATFORM'S METHODS *******************
function SSL(){
  this.head = null
}
function Node(data){
  this.val = data
  this.next = null
}


SSL.prototype.find = function(data){//finds a node with a val equal to the given data
  var current = this.head
  while(current){
    if(current.val == data)
      return current
    current = current.next
  }
  return false
}
SSL.prototype.theirInsert = function(newdata, data=null){//PLATFORM'S INSERT - inserts a new node by first using the find function above to find a node with the given data, sets head equal to the new node if no data given, this will break if the given data finds  a node in the middle of the list, the rest of the list will drift off
  var n = new Node(newdata)
  if(data == null){
    this.head = n
  } else{
    var previousNode = this.find(data)
    previousNode.next = n
  }
}
SSL.prototype.findPrevious = function(data){//PLATFORM'S CODE, finds the previous node using the data given, used in their remove
  var current = this.head
  while(current){
    if(current.next.val == data)//this will find whichever node contains the data and return the node before it
      return current
    current = current.next
  }
  return false
}
SSL.prototype.theirRemove = function(data){
  var previousNode = this.findPrevious(data)
  var nodeToRemove = this.find(data)
  previousNode.next = nodeToRemove.next //bascially we made the previous node, or the node that is before the one we want to remove point to the node after the one we want to remove. So if we have the nodes a, b, c in this order, and we want to remove b, we find a, then make a point to c. Then we will make sure that b is no longer pointing to c so it drifts off
  nodeToRemove.next = null
}


var cities = new SSL();
cities.theirInsert("Los Angeles");
cities.theirInsert("San Francisco", "Los Angeles");
cities.theirInsert("Seattle", "San Francisco");
cities.display();
console.log('Removing SF ');
cities.theirRemove('San Francisco')
cities.display();
