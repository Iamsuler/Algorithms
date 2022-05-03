// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True0

class WordDictitionary {
  tmp: Record<string, string>
  constructor () {
    this.tmp = {}
  }
  
  addWord(word: string) {
    this.tmp[word] = word;
  }
  
  search(word: string) {
    const result = this.tmp[word]
    
    if (result) {
      return true
    }
    
    // 有点的情况
    const keys = Object.keys(this.tmp) // ['bad', 'dad', 'mad']
    
    let i = 0
    for (; i < keys.length; i++) {
       const key = keys[i]
       
       if (word.length === key.length) {
        let j = 0
         for (; j < word.length; j++){
           if (!(word[j] === key[j] || word[j] === '.' || key[j] === '.')) {
             break;
           } 
         }

         if(j === word.length) break;
       }
    }

    return i < keys.length;

  }
}

const wordDictionary = new WordDictitionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b.."));
