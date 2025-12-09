function findUniqueToy(toy: string): string {

  const frequencyMap = new Map<string, number>();
  const lowerToy = toy.toLowerCase();

  for (const char of lowerToy) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  for (let i = 0; i < toy.length; i++) {
    const originalChar = toy[i];
    const lowerChar = lowerToy[i];
      
    if (frequencyMap.get(lowerChar) === 1) {
      return originalChar; 
    }
  }

  return "";
}