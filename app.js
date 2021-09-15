// Task 1 - find sum of all number in 2 arrays
const array1 = [7,101,3,1,9,11,100,111] // 343
const array2 = [90,101,3,1,69,11,10,111] // 396
// 343 + 396
export function sumNumsInArrays(array1, array2) {
    let array3 = [];
    for (i = 0; i < array2.length; i++) {
      array3.push(array1[i] + array2[i]);
    }
    return array3;
  }