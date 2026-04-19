function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
  let result = "";

  for (let [symbol, value] of map) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// Example
console.log(convertToRoman(14));
console.log(toRoman(14)); // XIV