function revealSantaRoute(routes: [string, string][]): string[] {
  const routeMap = new Map<string, string>()

  for (const [origin, destiny] of routes) {
    routeMap.set(origin, destiny)
  }

  const visitedLocations: string[] = []

  let current = routes[0][0]

  while (routeMap.has(current)) {
    visitedLocations.push(current)
    current = routeMap.get(current)!
  }

  visitedLocations.push(current)

  return visitedLocations
}
