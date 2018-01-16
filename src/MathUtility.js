
//======  Power Function.
function power(x, n) {

  //== Exception defence.
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;

  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

//=======   factorial function.
function factorialize(num) {
  if (num < 0)
        return -1;
  else if (num == 0)
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
