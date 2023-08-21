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