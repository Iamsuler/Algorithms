// 给定两个字符串和一个字符串列表
// 每次只能转换一个单词，求是否能转换成功

function canTraslate(s1: string, s2: string): boolean {
  const len = s1.length;
  let diff = 0;
  for (let i = 0; i < len; i++) {
    diff = s1[i] !== s2[i] ? diff + 1 : diff;

    if (diff > 1) {
      return false;
    }
  }

  return true;
}
function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  if (!wordList.includes(endWord)) return 0;

  const queue = [beginWord];
  let step = 1;

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      const wordListLength = wordList.length;
      for (let j = wordListLength - 1; j >= 0; j--) {
        const curWord = wordList[j];
        if (canTraslate(curWord, cur!)) {
          queue.push(curWord);

          if (curWord === endWord) {
            return step + 1;
          }

          wordList.splice(j, 1);
        }
      }
    }
    step++;
  }

  return 0;
}

console.log(ladderLength("hot", "dog", ["hot", "dog", "dot"]));
