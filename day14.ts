type Gift = string | number | boolean
type Workshop = Record<string, any>
type Path = string[]

function findGiftPath(workshop: Workshop, gift: Gift): Path {
  for (const k1 in workshop) {
    const value1 = workshop[k1]
    if (value1 === gift) return [k1]
    else {
      for (const k2 in value1) {
        const value2 = value1[k2]
        if (value2 === gift) return [k1, k2]
        else {
          for (const k3 in value2) {
            const value3 = value2[k3]
            if (value3 === gift) return [k1, k2, k3]
          }
        }
      }
    }
  }
  return []
}
