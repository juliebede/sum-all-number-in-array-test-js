function sumItems(array) {
  
  // Base case if the array is empty
  if (array.length === 0) {
    return 0;
  
  // if the array has an array as the first element
  } else if (Array.isArray(array[0])) {
    let nestedArray = array[0];
    array.shift();
    return sumItems(nestedArray) + sumItems(array);
  
  // If the first element is not an array
  } else {
    let value = array[0];
    array.shift();
    return value + sumItems(array);
  }
}


module.exports = sumItems;