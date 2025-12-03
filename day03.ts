function drawGift(size: number, symbol: string): string {
  if (size < 2) return ""
  else {
    let border = symbol.repeat(size)
    let middle = symbol + " ".repeat(size - 2) + symbol
    let giftBox = border + "\n"
    for (let i = 0; i < size - 2; i++) {
      giftBox += middle + "\n"
    }
    giftBox += border
    return giftBox
  }
}