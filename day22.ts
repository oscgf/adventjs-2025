type MovementAction = {dx: number; dy: number}
type Position = { x: number; y: number }

function canEscape(maze: string[][]): boolean {
  if (!maze || maze.length === 0) return false

  const width = maze[0].length
  const height = maze.length
  const visited = new Set<string>()

  function moveSled(pos: Position): boolean {
    const { x, y } = pos
    const key = `${x},${y}`

    if (x < 0 || x >= width || y < 0 || y >= height) return false
    if (maze[y][x] === '#') return false
    if (visited.has(key)) return false
    if (maze[y][x] === 'E') return true

    visited.add(key)

    return (
      moveSled({ x: x + 1, y }) || // right
      moveSled({ x: x - 1, y }) || // left
      moveSled({ x, y: y - 1 }) || // up
      moveSled({ x, y: y + 1 })    // down
    )
  }

  return moveSled({x: 0, y: 0})
}