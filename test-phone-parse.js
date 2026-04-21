import { parsePhoneNumber, AsYouType } from 'libphonenumber-js';
const p1 = parsePhoneNumber('+9188514277701');
console.log(p1.isValid());
