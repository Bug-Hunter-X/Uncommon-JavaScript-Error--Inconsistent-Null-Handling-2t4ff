# Uncommon JavaScript Error: Inconsistent Null Handling

This repository demonstrates a subtle error in JavaScript related to null handling.  The `myFunction` initially handles `null` values gracefully. However, it doesn't handle other falsy values. This inconsistency could lead to unexpected behavior in the application if other falsy values need to be treated in the same way as `null`.

The solution provided addresses this by implementing a more robust check against falsy values, ensuring consistent handling of various input types.

## How to run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred code editor.
3. Run the files in a JavaScript environment (e.g., Node.js).
4. Observe the different outputs of both solutions to understand the error and its fix.