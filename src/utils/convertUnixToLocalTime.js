/** @format */

export const convertUnixToLocalTime = (unixTimestamp, timezoneOffset) => {
  // Convert Unix timestamp and apply the timezone offset (seconds to milliseconds)
  const date = new Date((unixTimestamp + timezoneOffset) * 1000);

  // Format the day (Sunday, Monday, etc.)
  const day = date.toLocaleDateString('en-GB', { weekday: 'long' });

  // Format the date (e.g., 04 Aug, 2024)
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return { day, formattedDate };
};
