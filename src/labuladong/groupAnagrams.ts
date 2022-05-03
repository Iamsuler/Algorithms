// 字谜分组
// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// function isAnagrams(s1: string, s2: string): boolean {
//   const l1 = s1.length;
//   const l2 = s2.length;

//   if (l1 !== l2) {
//     return false;
//   }

//   let cache: Record<string, number> = {};

//   for (let i = 0; i < l1; i++) {
//     const cur = s1[i];
//     cache[cur] = cache[cur] ? cache[cur] + 1 : 1;
//   }

//   for (let i = 0; i < l2; i++) {
//     const cur = s2[i];
//     if (cache[cur]) {
//       cache[cur] = cache[cur] - 1;
//     } else {
//       return false;
//     }
//   }

//   let result = 0;
//   Object.keys(cache).forEach((key) => {
//     result += cache[key];
//   });

//   return result === 0;
// }

// function groupAnagrams(strs: string[]): string[][] {
//   let cache: Record<string, string[]> = {};
//   const s0 = strs[0];
//   cache[s0] = [s0];
//   const len = strs.length;

//   for (let i = 1; i < len; i++) {
//     const cur = strs[i];
//     let hasGroup = false;
//     for (const key of Object.keys(cache)) {
//       hasGroup = isAnagrams(key, cur);
//       if (hasGroup) {
//         cache[key].push(cur);
//         break;
//       }
//     }

//     if (!hasGroup) {
//       cache[cur] = [cur];
//     }
//   }

//   return Object.keys(cache).map((key) => cache[key]);
// }

function groupAnagrams(strs: string[]): string[][] {
  const len = strs.length;
  const cache: Record<string, string[]> = {};

  for (let i = 0; i < len; i++) {
    const str = strs[i];
    const sortedStr = Array.from(str)
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join('');

    if (!cache[sortedStr]) {
      cache[sortedStr] = [];
    }
    cache[sortedStr].push(str);
  }

  return Object.keys(cache).map((key) => cache[key]);
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
