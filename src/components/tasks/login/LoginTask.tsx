'use client';

import Login from 'components/views/login/Login';
import {ReactElement} from 'react';

interface IProps {
  onBack?(): void;
  onClose?(): void;
  onConfirm?(bool: boolean): void;
}

function LoginTask({onBack, onClose, onConfirm}: IProps): ReactElement {
  return (
    <>
      <Login
        onConfirm={() => {
          return true;
        }}
        onBack={onBack}
        onClose={onClose}
      />
    </>
  );
}

export default LoginTask;
