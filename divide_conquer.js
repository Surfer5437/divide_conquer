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

class Node2 {
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
      let node = new Node2(val);
  
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



  // function realSize(arrays, x=0, pos=0) {
  //   //   [1,2,[3,4]]            1      1
    
  //   if (Array.isArray(arrays[pos])){
  //     x+=realSize(arrays[pos],x)
  //   } else if (Number.isInteger(arrays[pos])){
  //     realSize(arrays,x+=1,pos+=1)
  //   } else if (arrays[pos]=== undefined){
     
  //     console.log(x);
  //      return x;
  //   }
  //   }
  function realSize(arrays, x=0, pos=0) {
    
    if (pos == arrays.length) return x;
  
        for (let i = pos; i < arrays.length; i++){
          const element = arrays[i];
          if (Array.isArray(element)) {
            x += realSize(arrays[pos], x)
          } else {
            x+=1;
          }
        }
   if (pos == arrays.length) return x;
  
    }
    console.log(realSize([1,2,[3,4]]));


    /** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
  if (idx === words.length) return longestSoFar;
  longestSoFar = Math.max(words[idx].length, longestSoFar);
  return longest(words, idx + 1, longestSoFar);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr;
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}