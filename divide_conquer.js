// ****************    COUNT ZEROES    **************
function countZeroes(arr) {
    let zeroCount=0;
    arr.forEach(element => {
        if (element  === 0){
            zeroCount++;
        }
    });
    console.log(`Their are ${zeroCount} occurences of 0 in ${arr}.`);
}
countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0


//  ****************    sortedFrequency    ***************
function sortedFrequency(arr,val){
    let valCount=0;
    arr.forEach(element => {
        if (element  === val){
            valCount++;
        }
    });
    console.log(`Their are ${valCount} occurences of ${val} in ${arr}.`);
}
sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1


//  ****************    findRotatedIndex    ***************
function findRotatedIndex(arr,num){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === num){
            console.log(`The index of ${num} is ${i} in array ${arr}.`);
            return i;
        }
        
    }
    console.log(`${num} is not in array of ${arr}.`);
    return -1;
}

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1


//  *****************    findRotationCount ******************
function findRotationCount(arr){
    let count = 0;
    let previousEl = Number;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element<previousEl){
            count++;
        }
        previousEl=element;
    } console.log(count)
}


findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0

// ********************     stack    ***************************

/** Node: node for a stack. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /** Stack: chained-together nodes where you can
   *  remove from the top or add to the top. */
  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    /** push(val): add new value to end of the stack. Returns undefined. */
  
    push(val) {
      let node = new Node(val);
  
      if (!this.first) {
        this.first = node;
        this.last = node;
      } else {
        let tmp = this.first;
        this.first = node;
        this.first.next = tmp;
      }
  
      this.size++;
    }
  
    /** pop(): remove the node from the top of the stack
     * and return its value. Should throw an error if the stack is empty. */
  
    pop() {
      if (!this.first) throw new Error("Can't pop from an empty stack.");
  
      let temp = this.first;
  
      if (this.first == this.last) {
        this.last = null;
      }
  
      this.first = this.first.next;
      this.size--;
      return temp.val;
    }
  
    /** peek(): return the value of the last node in the stack. */
  
    peek() {
      return this.first.val;
    }
  
    /** isEmpty(): return true if the stack is empty, otherwise false */
  
    isEmpty() {
      return this.size === 0;
    }
  }
  

  // *************************    Queue    ************************

  /** Node: node for a queue. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  
  /** Queue: chained-together nodes where you can
   *  remove from the front or add to the back. */
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    /** enqueue(val): add new value to end of the queue. Returns undefined. */
  
    enqueue(val) {
      let node = new Node(val);
  
      if (!this.first) {
        this.first = node;
        this.last = node;
      } else {
        this.last.next = node;
        this.last = node;
      }
  
      this.size++;
    }
  
    /** dequeue(): remove the node from the start of the queue
     * and return its value. Should throw an error if the queue is empty. */
  
    dequeue() {
      if (!this.first) throw new Error("Can't dequeue from an empty queue.");
  
      let temp = this.first;
      if (this.first == this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.val;
    }
  
    /** peek(): return the value of the first node in the queue. */
  
    peek() {
      return this.first.val;
    }
  
    /** isEmpty(): return true if the queue is empty, otherwise false */
  
    isEmpty() {
      return this.size === 0;
    }
  }