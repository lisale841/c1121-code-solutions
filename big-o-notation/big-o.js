/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1) // constant time
  // 1 simple instruction respect to the input size 1 = multiply that and get big O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= 0(n)
    // comparision and .length two simple instruction x  "n times" = 0(2n)
    i++                             // 2 * n = O(2n) ~= 0(n)
    // 2 times and lenght of the array
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= 0(n)
    if (!seen[word]) {              // 3 * n = O(2n) ~= 0(n)
      seen[word] = true;            // 2 * n = 0(2n) ~= 0(n)
      unique[unique.length] = word; // 2 * n = O(2n) 0(n)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1) = constant
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= 0(n)
    i++                             // 2 * n = O(2n) ~= 0(n)
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= 0(n)
    // accessing i and assigning it;
    let isUnique = true;            // 1 * n = O(n) ~=linear

    for (
      let c = 0;                    // 1 * n  = O(n)
      c < i;                        // 1 * n^2= O(n^2)
      c++                           // 2 * n^2 = O(n^2) // quadratic;
    ) {
      const comparing = words[c];   // 2 * n^2 = O(n^2)
      if (comparing === word) {     // 2 * n^2 = O(n^2)
        isUnique = false;           // 1 * n^2 = O(n^2)
      }
    }
    if (isUnique) {                 // 1 * n = O(n)
      unique[unique.length] = word; // 3 * n = O(3n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2) // quadratic
