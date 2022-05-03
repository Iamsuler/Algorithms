// 寻找最长回文子串
// 举例 s = 'acaba'  => 'aba'

// 以某点为中心向两边扩散寻找
function palindrome(s: string, l: number, r: number): string {
  const len = s.length;
  while (l >= 0 && r < len && s[l] === s[r]) {
    l--;
    r++;
  }

  return s.substring(l + 1, r);
}

function longestPalindrome(s: string): string {
  let res = "";
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const s1 = palindrome(s, i, i);
    const s2 = palindrome(s, i, i + 1);

    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }

  return res;
}

console.log(longestPalindrome("abcdef"));
