'use client';

import {ReactElement, ReactNode} from 'react';

/* style */
import clsx from 'clsx';
import css from 'styled-jsx/css';

const style = css`
  .view-floating-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;

    &.large {
      padding: 24px;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 80%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &.full {
      padding: 0;
      background: initial;
    }

    &.double {
      display: flex;
      padding: 14px 24px;
      column-gap: 12px;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 80%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
`;

interface IProps {
  btnType?: 'large' | 'full' | 'double';
  children: ReactNode | ReactNode[];
}

export default function ViewFloatingFooter({btnType, children}: IProps): ReactElement {
  return (
    <div className={clsx('view-floating-footer', btnType)}>
      {children}
      <style jsx>{style}</style>
    </div>
  );
}
