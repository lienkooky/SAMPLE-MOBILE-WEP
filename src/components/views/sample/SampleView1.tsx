'use client';

import {ChangeEvent, ReactElement, useState} from 'react';

/* layouts */
import {ViewBody, ViewContainer, ViewFloatingFooter, ViewHeader} from 'components/layouts';

/* Mui */
import {Button, TextField} from '@mui/material';

interface IProps {
  data: number;
  onClose(): void;
  onConfirm(key: string, data: number): void;
}

/**
 * sample1
 * @returns
 */
function SampleView1({data, onClose, onConfirm}: IProps): ReactElement {
  const [step1, setStep1] = useState(data);

  const onChange = (event: ChangeEvent): void => {
    const {value} = event.target as HTMLInputElement;
    setStep1(Number(value));
  };

  const onClickConfirm = (): void => {
    if (step1) onConfirm('step1', step1);
  };

  return (
    <ViewContainer>
      <ViewHeader title="1단계" onClose={onClose} />
      <ViewBody>
        <TextField value={step1} InputProps={{fullWidth: true}} onChange={onChange} />
      </ViewBody>
      <ViewFloatingFooter btnType="large">
        <Button size="large" disabled={!step1} onClick={onClickConfirm}>
          다음
        </Button>
      </ViewFloatingFooter>
    </ViewContainer>
  );
}

export default SampleView1;
