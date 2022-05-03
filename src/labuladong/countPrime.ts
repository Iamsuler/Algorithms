function isPrime(n: number): boolean {
  for (let i = 2; i * i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// function countPrime(n: number): number {
//   let count = 0;
//   for (let i = 2; i < n; i++) {
//     if (isPrime(i)) {
//       count++;
//     }
//   }

//   return count;
// }

function countPrime(n: number): number {
  const isPrime = new Array(n).fill(true);

  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      // let j = i * i; j < n; j += i
      for (let j = i * 2; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.reduce((prev, next) => (next ? prev + 1 : prev), 0);
}

console.log(countPrime(10));
