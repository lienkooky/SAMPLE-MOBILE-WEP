'use client';

import {ReactElement, ReactNode} from 'react';

/* style */
import clsx from 'clsx';
import css from 'styled-jsx/css';

/* layout */
import {ViewLayoutTypes} from 'types/viewLayout';

const style = css`
  .view-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: white;

    &.popup {
      position: fixed;
      top: 0;
      z-index: 1;
    }
  }
`;

interface IProps {
  type?: ViewLayoutTypes;
  children: ReactNode | ReactNode[];
}

export default function ViewContainer({type = 'default', children}: IProps): ReactElement {
  return (
    <div className={clsx('view-container', type)}>
      {children}
      <style jsx> {style}</style>
    </div>
  );
}
