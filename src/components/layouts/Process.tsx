'use client';

import {ReactElement, ReactNode} from 'react';

/* style */
import clsx from 'clsx';
import css from 'styled-jsx/css';

const style = css`
  .process {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
`;

interface IProps {
  type: 'default';
  children: ReactNode | ReactNode[];
}

function Process({type, children}: IProps): ReactElement {
  return (
    <div className={clsx('process', type)}>
      {children}
      <style jsx>{style}</style>
    </div>
  );
}

export default Process;
