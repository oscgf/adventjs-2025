function decodeSantaPin(code: string): string | null {
  const blockPattern = new RegExp('\\[(?<n>[\\d<])(?<operation>[\\+\\-]*)\\]', 'g');
  let pin = '';
  
  const matches = [...code.matchAll(blockPattern)];
  
  if (matches.length < 4) return null;
  
  for (const match of matches) {
    const { n, operation } = match.groups!;
            
    if (n === '<') {
      pin += pin.slice(-1);

    } else {
      let result = parseInt(n);
      
      for (const op of operation) {
        if (op === '+') {
          result = (result + 1) % 10;
        } else if (op === '-') {
          result = (result - 1 + 10) % 10;
        }
      }
      pin += result.toString();
    }
  }
  
  return pin;
}