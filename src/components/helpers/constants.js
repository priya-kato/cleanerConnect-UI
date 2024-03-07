export const titleize = str => {
  if (!str) {
    return str;
  }
  return str
    ?.split(' ')
    .map(function (string) {
      return string?.charAt(0).toUpperCase() + string.slice(1);
    })
    .join(' ')
    .split('_')
    .map(function (string) {
      return string?.charAt(0).toUpperCase() + string.slice(1);
    })
    .join(' ');
};

export const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
