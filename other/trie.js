function Node(chr, value) {
  this.chr = chr;
  this.value = value; this.next = [];
}
function Trie() {
  this.root = new Node("A", null);
}
Trie.prototype.insert = function(word, value) {// assuming all words are going to be capatilized and start with A, and we don't care for duplicates, we'll just overwrite
  if(word.length == 1)
    this.root.value = value

  function recurse(node, index){
    if (index == word.length){//we finally found the node that should contain the value
      node.value = value
      return
    }
    for(i = 0; i < node.next.length; i++){
      if(node.next[i].chr == word[index])
        return recurse(node.next[i], index + 1)
    }
    var newNode = new Node(word[index], null)
    node.next.push(newNode)
    return recurse(newNode, index + 1)

  }// end of recursive function

  //it creates problems if we start the recursive function with the root node so the rest of the code for this method is seeing if the next node we need to seach already exists in the root's next array, in which case we call the recursive function with it, or if we need to create the new node
  var check = false
  for(i = 0; i < this.root.next.length; i++){
    if(this.root.next[i].chr == word[1]){
      recurse(this.root.next[i], 2)
      check = true
    }
  }
  if(!check){
    var node = new Node(word[1], null)
    this.root.next.push(node)
    recurse(node, 2)
  }

}// end of insert*****************


Trie.prototype.get = function(word) {
  // your code here (outputs value of word)
  function recurse(node, index){
    if(index == word.length){
      return node.value
    }
    for(i = 0; i < node.next.length; i++){
      if(node.next[i].chr == word[index]){

        return recurse(node.next[i], index + 1)
      }
    }
    return 'value doesnt exist'
  }// end of recursive function
  return recurse(this.root, 1)

}// end of get
Trie.prototype.display = function(){
  var node = this.root
  while(node){
    console.log(node.chr)
    console.log(node.value)
    node = node.next[0]
  }
}

var trie = new Trie();
trie.insert("ANDREW", "awesome");
trie.insert("ANDY", "amazing");
trie.insert("ANT", "what");
// trie.display()
console.log(trie.get("ANDREW"));
console.log(trie.get("ANDY"));
console.log(trie.get("ANT"));
console.log('space**********');
console.log(trie.get("AND"));//null
console.log(trie.get("ANS"));//doesn't exist so it logs, 'values doens't exist'
