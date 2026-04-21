import { parsePhoneNumber, AsYouType } from 'libphonenumber-js';
const p = parsePhoneNumber('+918851427770');
console.log('10 digits isValid:', p.isValid(), 'isPossible:', p.isPossible());
const p2 = parsePhoneNumber('+9188514277701');
console.log('11 digits isValid:', p2.isValid(), 'isPossible:', p2.isPossible());
