/** @format */

export const groupForecastByDay = (forecastList) => {
  const days = {};

  forecastList.forEach((forecast) => {
    const date = new Date(forecast.dt_txt);
    const day = date.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
    });

    if (!days[day]) {
      days[day] = [];
    }
    days[day].push(forecast);
  });

  return days;
};
