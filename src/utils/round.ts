export const round = (value: number, precision: number = 0) => {
  const multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
};

export const getRatingColor = (mark: number): '#FA9313' | '#0CC44D' | '#FF5431' => {
  if (mark < 4) {
    return '#FF5431';
  } else if (4 <= mark && mark < 7) {
    return '#FA9313';
  } else {
    return '#0CC44D';
  }
};
