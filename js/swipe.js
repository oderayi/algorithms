const possible_words = ['swipe', 'swype'];

function genWords(input_path) {
  let partials = [];
  
  partials.push(input_path[0]);
  
  for (let i=1; i<input_path.length; i++) {
    const newPartials = [];
    for (let k=0; k<partials.length; k++) {
      for (let j=i; j<input_path.length; j++) {
        const search = `${partials[k]}${input_path[j]}`;
        if (newPartials.includes(search)) continue;
        if (trieMatch(search)) {
          newPartials.push(search);
        }
      }
      if (newPartials.length) partials.push(...newPartials);
      partials = Array.from(new Set(partials));
    }
  }

  const matched_words = partials.filter(p => possible_words.includes(p));
  return matched_words;
}

function trieMatch(str) {
  for (const word of possible_words) {
    if (word.startsWith(str)) return true;
  }
}

//console.log(possible_words[0].startsWith('swf'))
const path = 'swertyuiopoiuytre';
console.log(genWords(path))