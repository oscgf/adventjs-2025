type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`

function timeUntilTakeOff(
  fromTime: ElfDateTime,
  takeOffTime: ElfDateTime
): number {

  // Helper function to convert ElfDateTime to Unix timestamp in seconds
  function getUnixTimestampInSeconds(elfTime: ElfDateTime): number {
    // Extract date and time components using regex
    const match = elfTime.match(/(\d{4})\*(\d{2})\*(\d{2})@(\d{2})\|(\d{2})\|(\d{2}) NP/);
    // Validate the extracted components
    if (!match) throw new Error('Formato de fecha elfo inválido');
    // Destructure and convert to numbers
    const [, year, month, day, hour, minute, second] = match.map(Number);
    const date = new Date(Date.UTC(year, month - 1, day, hour, minute, second)); // Months are 0-indexed in JavaScript
    return Math.floor(date.getTime() / 1000); // Convert milliseconds to seconds
  }
  // Get Unix timestamps for both times
  const fromUxix = getUnixTimestampInSeconds(fromTime)
  const takeOffUnix = getUnixTimestampInSeconds(takeOffTime)
  // Calculate the difference in seconds
  return takeOffUnix - fromUxix
}