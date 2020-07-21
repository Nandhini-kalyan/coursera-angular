var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("number Array: ", arr);
var filteredArray = arr.filter(function (val) {
  return val > 5;
});
console.log("filtered array: ", filteredArray);
