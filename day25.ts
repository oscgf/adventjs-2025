function execute(code: string): number {
  let result = 0;
  let i = 0;

  while (i < code.length) {
    const order = code[i];

    if (order === '+') {
      result++;
    } else if (order === '-') {
      result--;
    } else if (order === '[') {
      if (result === 0) {
        i = code.indexOf(']', i);
      }
    } else if (order === ']') {
      if (result !== 0) {
        i = code.lastIndexOf('[', i);
      }
    } else if (order === '{') {
      if (result === 0) {
        i = code.indexOf('}', i);
      }
    }
    
    i++;
  }

  return result;
}