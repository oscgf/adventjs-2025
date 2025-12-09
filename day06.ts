type Glove = { hand: 'L' | 'R'; color: string }

function matchGlovesOptimized(gloves: Glove[]): string[] {

  const unmatchedCounts = new Map<string, { L: number; R: number }>()
  const matchedColors: string[] = []

  for (const glove of gloves) {
    const { hand, color } = glove

    if (!unmatchedCounts.has(color)) {
      unmatchedCounts.set(color, { L: 0, R: 0 })
    }

    const counts = unmatchedCounts.get(color)!
    const counterpartHand = hand === 'L' ? 'R' : 'L'

    if (counts[counterpartHand] > 0) {
      counts[counterpartHand]--
      matchedColors.push(color)
    } else {
      counts[hand]++
    }
  }

  return matchedColors
}