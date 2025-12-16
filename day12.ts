function elfBattle(elf1: string, elf2: string): number {
  let life1 = 3
  let life2 = 3

  const rounds = Math.min(elf1.length, elf2.length)

  for (let i = 0; i < rounds; i++) {
    const move1 = elf1[i]
    const move2 = elf2[i]

    let damageTo1 = 0
    let damageTo2 = 0

    // Daño al elfo 1
    if (move2 === 'A' && move1 !== 'B') {
      damageTo1 = 1
    }
    if (move2 === 'F') {
      damageTo1 = 2
    }

    // Daño al elfo 2
    if (move1 === 'A' && move2 !== 'B') {
      damageTo2 = 1
    }
    if (move1 === 'F') {
      damageTo2 = 2
    }

    life1 -= damageTo1
    life2 -= damageTo2

    if (life1 <= 0 || life2 <= 0) break
  }

  const dif = life1 - life2
  return dif === 0 ? 0 : dif > 0 ? 1 : 2
}