function myFunctionImproved(a, b) {
  // Check for falsy values using loose comparison
  if (!a || !b) {
    return 0; // Handle falsy values
  }
  return a + b;
}

console.log(myFunctionImproved(5, null)); // Output: 0
console.log(myFunctionImproved(5, 0));   // Output: 0
console.log(myFunctionImproved(5, 3));   // Output: 8
console.log(myFunctionImproved(5, ""));  //Output: 0
console.log(myFunctionImproved(5, undefined)); // Output:0