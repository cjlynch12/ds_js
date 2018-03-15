//recursive algo examples

function sum(list){
  if (list.length === 0) {  
    return 0;
  }
  return list[0] + sum(list.slice(1));
};

let sumVal = sum([2,4,5]);
console.log('recursive sum:',sumVal);

function count(list){
  if (list.length === 0) {
    return 0;
  }
  return 1 + count(list.slice(1));
};

let countVal = count([1,2,4,'a','l',02232,1111,4]);
console.log('recursive count:', countVal);

function max(list) {
  if (list.length === 1){
  return list[0];
  }
  let sub_max = max(list.slice(1));
  if (list[0] > sub_max) {
    return list[0];
  }
  return sub_max;
  
};
let maxVal = max([1,200,303,400]);

console.log('maxval:', maxVal);

function binarysearch(list, item) {
  if (!item) {return 'must provide search item'};
  let midpoint = Math.floor(list.length/2);
  if (list[midpoint] > item) {
    let newArr = list.slice(0, midpoint);
    return binarysearch(newArr, item);
  } else if (list[midpoint]  < item) {
    let newArr = list.slice(midpoint + 1, list.length);
    return binarysearch(newArr, item);
  } else {
    return list[midpoint];
  }
  
};
let search = binarysearch([1,2,3,4,5],3);
console.log('item found:', search);

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = Math.floor(Math.random() * Math.floor(arr.length));
    let smallArr = [];
    let largeArr = [];
    for (var i = 1; i<arr.length; i++) {
      if (arr[i] <= arr[0]) {
        smallArr.push(arr[i]);
      } else {
        largeArr.push(arr[i]);
      }
  
    }
    return quickSort(smallArr).concat([pivot],quickSort(largeArr));
    
  }
  
}

console.log('quickSort:',quickSort([3,2,1,5,6,3,9,7,11,200,312,333,421,0.1,2.2]))

