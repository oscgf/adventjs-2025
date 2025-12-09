function drawTree(height: number, ornament: string, frequency: number): string {
  let tree = '';
  let position = 1;

  for (let i = 0; i < height; i++) {
    const spaces = ' '.repeat(height - i - 1);
    let row = '';

    for (let j = 0; j < 2 * i + 1; j++) {
      row += (position % frequency === 0) ? ornament : '*';
      position++;
    }

    tree += spaces + row + '\n';
  }

  const trunkSpaces = ' '.repeat(height - 1);
  tree += trunkSpaces + '#';

  return tree;
}