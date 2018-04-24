//'use strict';

function splitArr(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  if (wholeArray.length <= 1) {
    return [wholeArray, []];
  }
  const midArray = wholeArray.length / 2;
  let firstHalf = wholeArray.slice(0, midArray);
  let secondHalf = wholeArray.slice(midArray, wholeArray.length);
  return [firstHalf, secondHalf];
}

function merge(left, right) {
  // if (!left) {
  //   return right;
  // } else if (!right) {
  //   return left;
  // }
  let sortedArr = [];
  let indexLeft = 0;
  let indexRight = 0;
  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      sortedArr.push(left[indexLeft]);
      indexLeft++;
    } else {
      sortedArr.push(right[indexRight]);
      indexRight++;
    }
  }

  for (; indexLeft < left.length; indexLeft++) {
    sortedArr.push(left[indexLeft]);
  }

  for (; indexRight < right.length; indexRight++) {
    sortedArr.push(right[indexRight]);
  }

  return sortedArr;
}

function mergeSort(array) {
  console.log('Array is: ', array);
  //returns a sorted array

  if (array.length < 2) {
    return array;
  }
  let splitted = splitArr(array);
  let left = splitted[0];
  let right = splitted[1];
  // //debugger;
  // //console.log(splitArr(array));
  // let left = mergeSort(splitted[0]);
  // let right = mergeSort(splitted[1]);
  return merge(mergeSort(left), mergeSort(right));
}
