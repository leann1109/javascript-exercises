const convertToCelsius = function(temp) {
  let result = (temp - 32) * (5/9);
  let resultRounded = Math.round(result * 10) / 10;
  return resultRounded;
};

const convertToFahrenheit = function(temp) {
  let result = (temp * (9/5) + 32);
  let resultRounded = Math.round(result * 10) / 10;
  return resultRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
