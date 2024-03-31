'use client';

import {ReactElement, ReactNode} from 'react';

/* style */
import css from 'styled-jsx/css';

const style = css`
  .page-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

interface IProps {
  children: ReactNode | ReactNode[];
}

export default function PageContainer({children}: IProps): ReactElement {
  return (
    <div className="page-container">
      {children}
      <style jsx>{style}</style>
    </div>
  );
}
