'use etrict';
const bubbleSort = array => {
  if (array.length <= 1) {
    return array;
  }
  let arrayLength = array.length - 1;
  for (let i = 0; i < arrayLength; i++) {
    // let element1 = array[i];
    // let element2 = array[i + 1];
    if (!inOrder(array, i)) {
      //some code
      swap(i, i + 1, array);
    }
  }
  return array;
};

function inOrder(array, index) {
  if (index === array.lenght - 1) return true;
  return array[index] < array[index + 1];
}

function swap(index1, index2, array) {
  console.log('elm 1a', array[index1]);
  console.log(array[index2]);
  let firstElm = array[index1];
  array[index1] = array[index2];
  array[index2] = firstElm;
}
