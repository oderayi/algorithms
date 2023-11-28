function palindrome(s) {
    const chars = s.split('');
    const pals = [];
  
    let start=0;
    let end = 1;
  
    while(start<chars.length && end < chars.length) {
      const ch = chars.slice(start, end).join('');
      const r = ch.split('').reverse().join('');
       
      console.log('ch:', ch)
      console.log('r:', r)
      
      if (ch.length > 0 && ch == r) {
        pals.push(ch);
        end++
      }
      else start++
    }
  return pals.length;
}

palindrome('aabaa')