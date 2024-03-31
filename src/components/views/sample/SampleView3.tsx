'use client';

import {ChangeEvent, ReactElement, useState} from 'react';

/* style */
import css from 'styled-jsx/css';

/* layouts */
import {ViewBody, ViewContainer, ViewFloatingFooter, ViewHeader} from 'components/layouts';

/* Mui */
import {Button} from '@mui/material';

const style = css`
  input[type='checkbox'] {
    appearance: auto;
  }
`;

interface IProps {
  data: boolean;
  onBack(): void;
  onClose(): void;
  onConfirm(key: string, data: boolean): void;
}

function SampleView3({data = false, onBack, onClose, onConfirm}: IProps): ReactElement {
  const [step3, setStep3] = useState(data);

  const onChange = (event: ChangeEvent): void => {
    const {checked} = event.target as HTMLInputElement;
    setStep3(checked);
  };

  const onClickConfirm = (): void => {
    onConfirm('step3', step3);
  };

  return (
    <ViewContainer>
      <ViewHeader title="3단계" onBack={onBack} onClose={onClose} />
      <ViewBody>
        <input type="checkbox" checked={step3} onChange={onChange} />
      </ViewBody>
      <ViewFloatingFooter btnType="large">
        <Button size="large" disabled={!step3} onClick={onClickConfirm}>
          다음
        </Button>
      </ViewFloatingFooter>
      <style jsx>{style}</style>
    </ViewContainer>
  );
}

export default SampleView3;
