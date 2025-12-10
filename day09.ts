type Board = string
type Moves = string
type Result = 'fail' | 'crash' | 'success'
type Position = { x: number; y: number } | null
type MovementAction = {dx: number; dy: number}
type State = {result: Result; pos: Position}

function moveReno(board: Board, moves: Moves): Result {
  const movements: Record<string, MovementAction> = {
    'U': { dx: -1, dy: 0 },
    'D': { dx: 1, dy: 0 },
    'L': { dx: 0, dy: -1 },
    'R': { dx: 0, dy: 1 },
  }

  const prepareBoard = (board: Board): { boardArray: string[], initialPosition: Position } => {
    const boardArray = board.trim().split('\n')
    let initialPosition: Position = null

    for (let i = 0; i < boardArray.length; i++) {
      const col = boardArray[i].indexOf("@")
      if (col !== -1) {
        initialPosition = { x: i, y: col }
        break
      }
    }

    return { boardArray, initialPosition }
  }

  const { boardArray, initialPosition } = prepareBoard(board)

  if (!initialPosition) return "fail"

  const moveSteps = moves.split('')
  const boardHeight = boardArray.length
  const boardWidth = boardArray[0].length

  const initialState: State = { 
    result: 'fail', 
    pos: initialPosition 
  }

  const finalState = moveSteps.reduce((currentState: State, moveChar: string): State => {
    if (currentState.result !== 'fail') {
      return currentState
    }

    const action = movements[moveChar]
    if (!action) return currentState

    const currentPos = currentState.pos!
    const newX = currentPos.x + action.dx
    const newY = currentPos.y + action.dy

    if (newX < 0 || newX >= boardHeight || 
        newY < 0 || newY >= boardWidth ||
        boardArray[newX][newY] === "#") {
      
      return { result: 'crash', pos: { x: newX, y: newY } }
    }
    
    if (boardArray[newX][newY] === "*") {
      return { result: 'success', pos: { x: newX, y: newY } }
    }
    
    return { result: 'fail', pos: { x: newX, y: newY } }

  }, initialState)

  return finalState.result
}