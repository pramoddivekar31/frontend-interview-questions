const minifyString = (inputString) => {
  if (typeof inputString !== "string") {
    throw new TypeError("Input must be a string.");
  }

  if (!inputString) return "";

  const characterCountMap = new Map();
  const minifiedString = "";

  for (let char of inputString) {
    characterCountMap.set(char, (characterCountMap.get(char) || 0) + 1);
  }

  for (let [char, count] of characterCountMap) {
    minifiedString += `${count}${char}`;
  }

  return minifiedString;
};

// Example usage
const inputString = "AAABB";
minifyString(inputString);

function multiplyWithoutOperator(a, b) {
  // Handle special cases
  if (a === 0 || b === 0) {
    return 0;
  }
  if (b === 1) {
    return a;
  }
  if (a === 1) {
    return b;
  }

  let result = 0;
  let negativeResult = false;

  // Handle negative numbers
  if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    negativeResult = true;
  }

  a = Math.abs(a);
  b = Math.abs(b);

  // Add 'a' to 'result' 'b' times
  for (let i = 0; i < b; i++) {
    result += a;
  }

  // Apply negative sign if necessary
  if (negativeResult) {
    result = -result;
  }

  return result;
}

// Example usage
console.log(multiplyWithoutOperator(5, 3)); // Output: 15
console.log(multiplyWithoutOperator(-4, 7)); // Output: -28

function findFirstDuplicate(str) {
  const seen = new Set(str);

  for (const char of str) {
    if (seen.has(char)) {
      return char; // Found the first duplicate character
    }
  }

  return null; // No duplicate character found
}
