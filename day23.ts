type Position = { x: number; y: number }

function minStepsToDeliver(map: string[][]): number {
  if (!map || map.length === 0) return -1

  const height = map.length
  const width = map[0].length

  let start: Position | null = null

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (map[y][x] === 'S') {
        start = { x, y }
        break
      }
    }
    if (start) break
  }

  if (!start) return -1

  const queue: Array<{ pos: Position; dist: number }> = []
  const visited = new Set<string>()

  queue.push({ pos: start, dist: 0 })
  visited.add(`${start.x},${start.y}`)

  let totalSteps = 0
  let giftsFound = 0

  let totalGifts = 0
  for (const row of map) {
    for (const cell of row) {
      if (cell === 'G') totalGifts++
    }
  }

  const directions = [
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 }
  ]

  while (queue.length > 0) {
    const { pos, dist } = queue.shift()!
    const { x, y } = pos

    if (map[y][x] === 'G') {
      totalSteps += dist
      giftsFound++

      if (giftsFound === totalGifts) break
    }

    for (const { dx, dy } of directions) {
      const nx = x + dx
      const ny = y + dy
      const key = `${nx},${ny}`

      if (
        nx >= 0 &&
        nx < width &&
        ny >= 0 &&
        ny < height &&
        map[ny][nx] !== '#' &&
        !visited.has(key)
      ) {
        visited.add(key)
        queue.push({ pos: { x: nx, y: ny }, dist: dist + 1 })
      }
    }
  }

  return giftsFound === totalGifts ? totalSteps : -1
}
