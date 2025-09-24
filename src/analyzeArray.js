export function analyzeArray(arr) {
  if (!arr || arr.length === 0) {
    return {
      average: null,
      min: null,
      max: null,
      length: arr ? 0 : null,
    };
  }

  let sum = arr[0];
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return {
    average: Math.round(sum / arr.length),
    min,
    max,
    length: arr.length,
  };
}
