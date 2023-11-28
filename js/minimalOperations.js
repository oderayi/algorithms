/*
 * Complete the 'minimalOperations' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY words as parameter.
 */

function minimalOperations(words) {
    let result = [];
    
    for (const [i, word] of words.entries()) {
        const chars = word.split('');
        result.push(0);
        for (const [j, c] of chars.entries()) {
            if (c == chars[j+1]) chars[j+1] = 1;
        }
        words[i] = chars.join("");
    }
    
    for (const [i, word] of words.entries()) {
       let count = word.split(1).length - 1;
       result[i] = count;
    }
    
    return result;
   }