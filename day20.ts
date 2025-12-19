function dropGifts(warehouse: string[][], drops: number[]): string[][] {
  if (!warehouse.length) return warehouse

  for (let i=0; i<drops.length; i++) {
    const drop = drops[i]
    for (let j=warehouse.length-1; j>=0; j--) {
      if (warehouse[j][drop] == '.') {
        warehouse[j][drop] = '#'
        break
      }
    }
  }
  
  return warehouse
}