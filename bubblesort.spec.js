// describe('Bubble Sort', function() {
//   beforeEach(function() {
//     let counter;
//   });
//   it('checking inOrdrr was called the right num of times', function() {
//     spyOn(window, 'inOrder').and.callThrough();
//     bubbleSort([4, 6, 5, 1]);
//     expect(inOrder.calls.count()).toEqual(10);
//   });
//   it('checking swap was called the right num of times', function() {
//     spyOn(window, 'swap').and.callThrough();
//     bubbleSort([3, 2, 1]);
//     expect(swap.calls.count()).toEqual(3);
//   });

//   it('handles an empty array', function() {
//     expect(bubbleSort([])).toEqual([]);
//   });

//   it('handles a single item in an array', function() {
//     expect(bubbleSort([1])).toEqual([1]);
//   });

//   it('handles multiple items in an array', function() {
//     expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
//     expect(bubbleSort([6, 8, 5, 2])).toEqual([2, 5, 6, 8]);
//   });
// });

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(splitArr([])).toEqual([[], []]);
    expect(splitArr([4, 10, 20])).toEqual([[4], [10, 20]]);
    expect(splitArr([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
    expect(splitArr([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // expect(merge([])).toEqual([]);
    // expect(merge([1])).toEqual([1]);
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([1, 2], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(merge([3, 4, 5], [1, 2])).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('mergeSort function', function() {
  it('sorts an un-ordered array', function() {
    //test the merging algorithm
    //expect(mergeSort([])).toEqual([]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([5, 2, 3, 4, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([3, 4, 5, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });
});
