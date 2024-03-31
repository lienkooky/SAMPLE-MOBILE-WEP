'use client';

import {ReactElement} from 'react';

/* style */
import css from 'styled-jsx/css';

/* layout */
import CommonImages from 'assets/images/CommonImages';

const style = css`
  header {
    display: flex;
    align-items: center;
    height: 48px;
    padding: 0 12px 0 20px;
    flex-shrink: 0;

    &.has-back-button {
      padding-left: 8px;

      .back-button {
        height: 40px;
      }
    }

    > h1 {
      font-size: 20px;
      font-weight: 600;
      line-height: 26px;
      letter-spacing: -0.6px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .close-button {
      height: 16px;
      align-items: end;
      margin-left: auto;
    }
  }
`;

interface IProps {
  title?: string;
  onBack?(): void;
  onClose?(): void;
}

export default function ViewHeader({title, onBack, onClose}: IProps): ReactElement {
  return (
    <header className={onBack && 'has-back-button'}>
      {onBack && (
        <button className="back-button" onClick={onBack}>
          <img src={CommonImages.get('back')} alt="back" />
        </button>
      )}
      <h1>{title}</h1>
      {onClose && (
        <button className="close-button" onClick={onClose}>
          <img src={CommonImages.get('close')} alt="close" />
        </button>
      )}
      <style jsx>{style}</style>
    </header>
  );
}
