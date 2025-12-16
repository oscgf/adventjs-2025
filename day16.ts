type Gifts = number[]
type MaxWeight = number
type Result = number | null

function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result {
  let sleds = 0
  let currentWeight = 0

  for (const gift of gifts) {
    if (gift > maxWeight) return null

    if (currentWeight + gift > maxWeight) {
      sleds++
      currentWeight = gift
    } else {
      currentWeight += gift
    }
  }

  if (currentWeight > 0) sleds++

  return sleds
}