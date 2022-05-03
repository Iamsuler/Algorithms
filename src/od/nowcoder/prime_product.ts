function nowcoder_prime_product(n: number): number[] {
  let res: number[] = []

  function dp(n: number) {
    let i = 2;

    if (n === i) {
      res.push(n);
      return;
    }

    while (true) {
      if (n % i === 0) {
        res.push(i);
        dp((n / i) >> 0)

        return;
      } else {
        i++;

        if (i === n) {
          res.push(n);
          return;
        }
      }
    }
  }

  dp(n);

  return res.length === 2 ? res : [-1, -1];
}

console.log(nowcoder_prime_product(8))