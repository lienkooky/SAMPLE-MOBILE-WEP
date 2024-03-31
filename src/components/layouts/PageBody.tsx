'use client';

import {ReactElement, ReactNode} from 'react';

/* style */
import css from 'styled-jsx/css';

const style = css`
  .page-body {
    height: 100%;
    flex: 1;
    overflow-y: auto;
  }
`;

interface IProps {
  children: ReactNode | ReactNode[];
}

export default function PageBody({children}: IProps): ReactElement {
  return (
    <div className="page-body">
      {children}
      <style jsx>{style}</style>
    </div>
  );
}
