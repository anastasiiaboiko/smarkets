// Checks if 2 arrays have equal values
export const areEqual = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      return false;
    }
  }
  return true;
};
