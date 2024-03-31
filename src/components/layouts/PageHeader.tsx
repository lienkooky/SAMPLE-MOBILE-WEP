'use client';

import {ReactElement} from 'react';

/* style */
import css from 'styled-jsx/css';

/* image */
import CommonImages from 'assets/images/CommonImages';

/* Mui */
import {Badge} from '@mui/material';

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
    }

    .close-button {
      height: 16px;
      align-items: end;
      margin-left: auto;
    }

    .info-button {
      height: auto;
      align-items: end;
      margin-left: auto;
      padding-right: 10px;
    }
  }
`;

interface IProps {
  title?: string;
  onBack?(): void;
  onClose?(): void;
  onInfo?(): void;
  infoColor?: string;
}

function PageHeader({title, onBack, onClose, onInfo, infoColor = '#000'}: IProps): ReactElement {
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
      {onInfo && (
        <button className="info-button" onClick={onInfo}>
          <Badge className="alram" color="info" variant="dot">
            <img src={CommonImages.get('alram', infoColor, {checked: true})} alt="alram" />
          </Badge>
        </button>
      )}
      <style jsx>{style}</style>
    </header>
  );
}

export default PageHeader;
