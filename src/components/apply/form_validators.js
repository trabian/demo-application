import { stripPhoneNumber, stripSocialSec } from './form_normalizers';

var emailRgx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateEmail = input => {
  return emailRgx.test(input) ? undefined : 'You must supply a valid email address!';
}

export const validatePhoneNumber = input => {
  const cleanNumber = stripPhoneNumber(input);
  return /[0-9]+/.test(cleanNumber) && cleanNumber.length === 10 ? undefined : 'You must supply a valid phone number!';
}

export const required = value => (value == null ? 'Required' : undefined);

export const validateSocialSec = input => {
  const socialSecurity = stripSocialSec(input);
  if(socialSecurity.length !== 9){
    return 'Invalid Social Security Number';
  }
};

export const valiDate = value => {
  let ageMs = Date.now() - new Date(value).getTime();
  return (new Date(ageMs).getUTCFullYear() - 1970) >= 18 ? undefined : 'Must be 18 or older.';
};
