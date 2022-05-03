// 输出指定字母在字符串中的索引

// 给定一个字符串，把字符串按照大写在前小写在后排序，输出排好后的第 K 个字母在原来字符串的索引。相同字母输出第一个出现的位置。

// 例如：

// 输入

// hAkDAjByBq 4
// 输出

// 6

// 排好序后 AABBDhjkqy，第 4 个是 B，第一个出现的在原字符串 6 这个位置。（索引是从 0 开始）

function sort_string(s: string): string {
  return s.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
}
function nowcode_string_index(s: string, index: number): number {
  let len = s.length;
  let cache: Map<string, number> = new Map();
  let lowcase = '';
  let upcase = '';
  let aCharCode = 'a'.charCodeAt(0);

  for (let i = 0; i < len; i++) {
    let cur = s[i]
    if (cur.charCodeAt(0) >= aCharCode) {
      lowcase += cur;
    } else {
      upcase += cur;
    }

    if (!cache.has(cur)) {
      cache.set(cur, i);
    }
  }

  let target = sort_string(upcase) + sort_string(lowcase);

  return cache.get(target[index - 1])!;
}

// AABBDhjkqy
console.log(nowcode_string_index('hAkDAjByBq', 4));