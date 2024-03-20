import moment from 'moment-timezone';

export const validateEmail = text => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(text);
};

export const minCharacter = (char, length, name) => {
  if (char.length < length) {
    return `${name || 'This field'} should be atleast minimum of ${length}`;
  }
};

export const IST = date => {
  const istDateTime = moment.utc(date).tz('Asia/Kolkata').format('YYYY-MM-DD');
  return istDateTime;
};

export const stringDate = date => {
  const stringdate = moment.utc(date).tz('Asia/Kolkata').format('DD MMM YYYY');
  return stringdate;
};
