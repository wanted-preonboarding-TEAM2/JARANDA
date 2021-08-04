import React from 'react';
import SignupComp from 'components/signup';

export default function Signup({ isModal }) {
  return (
    <div>
      <SignupComp isModal={isModal} />
    </div>
  );
}
