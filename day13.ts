type Factory = string[]
type Result = 'completed' | 'broken' | 'loop'
      
function runFactory(factory: Factory): Result {
  const movements: Record<string, { dx: number, dy: number }> = {
    '^': { dx: -1, dy: 0  },
    'v': { dx:  1, dy: 0  },
    '<': { dx:  0, dy: -1 },
    '>': { dx:  0, dy: 1  },
  }

  let posX = 0
  let posY = 0
  const visited = new Set<string>()
  
  while (true) {
    const key = `(${posX},${posY})`
    if (visited.has(key)) return 'loop'
    visited.add(key)

    const char = factory[posX][posY]

    if (char === '.') return 'completed'

    const action = movements[char]
    if (!action) return 'broken'

    posX += action.dx
    posY += action.dy

    if (
      posX < 0 || posX >= factory.length ||
      posY < 0 || posY >= factory[0].length
    ) {
      return 'broken'
    }
  }
}