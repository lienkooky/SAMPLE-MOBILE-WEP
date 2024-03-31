'use client';

import {ReactElement, ReactNode} from 'react';

/* style */
import css from 'styled-jsx/css';

const style = css`
  .view-body {
    padding: 0 0 110px;
    height: 100%;
    flex: 1;
    overflow-y: auto;
  }
`;

interface IProps {
  children: ReactNode | ReactNode[];
}

export default function ViewBody({children}: IProps): ReactElement {
  return (
    <div className="view-body">
      {children}
      <style jsx>{style}</style>
    </div>
  );
}
