// Define the Gift type
type Gift = { toy: string; quantity: number }

function manufactureGifts(giftsToProduce: Gift[]): string[] {
  // Helper function to validate quantity
  function isValidGift(quantity: number): boolean {
    return Number.isInteger(quantity) && quantity > 0
  }

  // Generate the list of gifts to produce
  return giftsToProduce.flatMap(gift =>
      isValidGift(gift.quantity)
      ? Array.from({ length: gift.quantity }, () => gift.toy)
      : []
  );
}