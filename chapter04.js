/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  var retval = [];
  for(var i=min; i<=max; i+=step){
    retval[retval.length]=i;
  }
  return retval;
}

function sum(array) {
  var retval = 0;
  for(var i=0; i<array.length; i++){
    retval += array[i];
  }
  return retval;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  var retval = [];
  for(var i=array.length; i>0; i--){
    retval[retval.length] = array[i-1];
  }
  return retval;
}

function swap(array, indexA, indexB){
  var i = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = i;
}

function reverseArrayInPlace(array) {
  for(var i=0; i<(array.length/2); i++){
    swap(array, i, array.length-i-1)
  }
}

// Problem 3: A List
function arrayToList(array) {
  var list = null;
  for(var i=array.length-1; i>=0; i--){
    list = prepend(array[i], list);
  }
  return list;
}

function listToArray(list) {
  var retval = [];
  while(list != null){
    retval[retval.length] = list.value;
    list = list.list;
  }
  return retval;
}

function listToArrayRecursive(list){
  var retval = [list.value];
  if (list.list != null){
    var returned = listToArrayRecursive(list.list);
    for(var i=0; i<returned.length; i++){
      retval[retval.length] = returned[i];
    }
  }
  return retval;
}

function nth(list, position) {
  if (position===0){
    return list.value;
  }else if(list.list != null){
    return nth(list.list, position-1);
  }else{
    return undefined;
  }
}

function prepend(element, list) {
  return {value:element, list:list}
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
