// LoginPage.jsx

import React from 'react';
import { SignIn, SignedOut } from '@clerk/clerk-react';

const LoginPage = () => {
  return (
    <SignedOut>
      <SignIn />
    </SignedOut>
  );
}

export default LoginPage;
