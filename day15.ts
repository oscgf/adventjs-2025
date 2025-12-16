type Data = Array<Record<string, string | number>>
type SortBy = string

function drawTable(data: Data, sortBy: SortBy): string {
  if (data.length === 0) return ''

  const columns = Object.keys(data[0])

  const sortedData = [...data].sort((a, b) => {
    const valA = a[sortBy]
    const valB = b[sortBy]

    if (typeof valA === 'number' && typeof valB === 'number') {
      return valA - valB
    }

    return String(valA).localeCompare(String(valB))
  })

  const columnWidths = columns.map(col => {
    const maxWidth = Math.max(
      1,
      ...sortedData.map(row => String(row[col]).length)
    )
    return maxWidth + 2
  })

  const drawSeparator = () =>
    '+' + columnWidths.map(w => '-'.repeat(w)).join('+') + '+'

  const drawHeader = () =>
    '| ' +
    columns
      .map((_, i) =>
        String.fromCharCode(65 + i).padEnd(columnWidths[i] - 1)
      )
      .join('| ') +
    '|'

  const drawRow = (row: Record<string, string | number>) =>
    '| ' +
    columns
      .map((col, i) =>
        String(row[col]).padEnd(columnWidths[i] - 1)
      )
      .join('| ') +
    '|'

  const lines = [
    drawSeparator(),
    drawHeader(),
    drawSeparator(),
    ...sortedData.map(drawRow),
    drawSeparator()
  ]

  return lines.join('\n')
}
