// RegisterPage.jsx

import React from 'react';
import { SignUp, SignedOut } from '@clerk/clerk-react';

const RegisterPage = () => {
  return (
    <SignedOut>
      <SignUp />
    </SignedOut>
  );
}

export default RegisterPage;
