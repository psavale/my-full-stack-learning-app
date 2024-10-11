/*
 Use case : j<k<l
*/

function findTriplateSequences(num) {
  let tripletPresent = false;
  for (var i = 0; i < num.length; i++) {
    if (i <= num.length - 2) {
      const temp1 = num[i] < num[i + 1];
      const temp2 = num[i + 1] < num[i + 2];
      if (temp1 && temp2) {
        tripletPresent = true;
        return tripletPresent;
      }
      continue;
    }
    return tripletPresent;
  }
}

const num = [5,2,8,4,5,6];
console.log(findTriplateSequences(num)); // true or false
