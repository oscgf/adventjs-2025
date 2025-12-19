function hasFourInARow(board: string[][]): boolean {

  // Verifica si hay cuatro luces iguales en una dirección específica
  function hasFourFrom(
    board: string[][],
    row: number,
    col: number,
    dRow: number,
    dCol: number
  ): boolean {
    let count = 1
    let prev = board[row][col]

    if (prev === '.') return false

    while (true) {
      row += dRow
      col += dCol

      if (
        row < 0 || row >= board.length ||
        col < 0 || col >= board[0].length
      ) {
        break
      }

      const curr = board[row][col]

      if (curr === prev) {
        count++
        if (count === 4) return true
      } else {
        break
      }
    }

    return false
  }

  const rows = board.length
  const cols = board[0].length

  // Horizontales →
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      if (hasFourFrom(board, r, c, 0, 1)) return true
    }
  }

  // Verticales ↓
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r <= rows - 4; r++) {
      if (hasFourFrom(board, r, c, 1, 0)) return true
    }
  }

  // Diagonales ↘
  for (let r = 0; r <= rows - 4; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      if (hasFourFrom(board, r, c, 1, 1)) return true
    }
  }

  // Diagonales ↙
  for (let r = 3; r < rows; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      if (hasFourFrom(board, r, c, -1, 1)) return true
    }
  }

  return false
}