function clearGifts(warehouse: string[][], drops: number[]): string[][] {
  if (!warehouse.length) return warehouse

  const height = warehouse.length
  const width = warehouse[0].length

  const dropGift = (grid: string[][], col: number): string[][] => {
    const newGrid = grid.map(row => [...row])

    for (let row = height - 1; row >= 0; row--) {
      if (newGrid[row][col] === '.') {
        newGrid[row][col] = '#'
        break
      }
    }
    return newGrid
  }

  const removeFullRows = (grid: string[][]): string[][] => {
    const remaining = grid.filter(row => row.includes('.'))
    const removed = height - remaining.length

    const emptyRows = Array.from(
      { length: removed },
      () => Array(width).fill('.')
    )

    return [...emptyRows, ...remaining]
  }

  let result = warehouse.map(row => [...row])

  for (const col of drops) {
    result = dropGift(result, col)
    result = removeFullRows(result)
  }

  return result
}