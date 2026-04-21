import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import { render } from 'react-dom';

function Test() {
  const [val, setVal] = useState('');
  return <PhoneInput international defaultCountry="IN" limitMaxLength={true} value={val} onChange={setVal} />;
}
