/** @format */

export const convertUnixToTime = (unix, timezone) => {
  const date = new Date((unix + timezone) * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};
