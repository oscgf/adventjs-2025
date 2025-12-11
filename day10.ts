function maxDepth (s: string): number {
  let currentDepth = 0
  let maxDepth = 0

  for (const char of s) {
    if (char === '[') {
      currentDepth++;
      maxDepth = Math.max(maxDepth, currentDepth);
    } else if (char === ']') {
      if (currentDepth === 0) {
        return -1;
      }
      currentDepth--;
    }
  }

  if (currentDepth !== 0) {
    return -1;
  }

  return maxDepth;
}