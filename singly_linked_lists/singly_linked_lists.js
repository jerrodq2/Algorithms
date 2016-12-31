function SSL(){
  this.head = null
}
function Node(data){
  this.val = data
  this.next = null
}

  //******************** MY METHODS *******************
SSL.prototype.display = function(){
  var current = this.head
  while(current){
    console.log(current.val)
    current = current.next
  }
}

SSL.prototype.add = function(data){//MY INSERT, inserts into the end of the list
  var n = new Node(data)
  var current = this.head
  if(!this.head){
    this.head = n
    return
  }
  while(current.next){//stops when the current doesn't have a next, or at the last node of the list
    current = current.next
  }
  current.next = n
}
SSL.prototype.remove = function(data){
  if(!this.head){
    return false
  }
  var current = this.head
  if(current.val == data){
    this.head = current.next
    current.next = null
    return current
  }
  var previous = null
  while(current){
    if(current.val == data){
      previous = current.next
      current.next = null
      return current
    }
    previous = current
    current = current.next
  }
  return false
}






var names = new SSL()
names.remove('John')//list is empty, does nothing
names.add('John')
//names.remove('John') // finds and removes John
// names.remove('David') //name, not found, does nothing
names.add('Sam')
names.add('David')
names.add('Jen')
names.display()
