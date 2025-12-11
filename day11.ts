function findUnsafeGifts(warehouse: string[]): number {
  function isCameraAdjacent(warehouse: string[], x: number, y: number): boolean {
    const directions = [
      [0, 1],  // right
      [0, -1], // left
      [1, 0],  // down
      [-1, 0]  // up
    ];

    for (const [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;
      
      if (
        nx >= 0 && nx < warehouse.length && 
        ny >= 0 && ny < warehouse[0].length && 
        warehouse[nx][ny] === '#'
      ) {
        return true;
      }
    }
    return false;
  }

  let unsafeCount = 0;

  for (let i = 0; i < warehouse.length; i++) {
    for (let j = 0; j < warehouse[i].length; j++) {
      if (warehouse[i][j] === '*' && !isCameraAdjacent(warehouse, i, j)) {
        unsafeCount++;
      }
    }
  }

  return unsafeCount;
}