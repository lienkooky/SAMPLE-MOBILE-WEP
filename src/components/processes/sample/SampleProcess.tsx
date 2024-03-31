'use client';

import {ReactElement, useCallback, useState} from 'react';

/* layout */
import {Process} from 'components/layouts';

/* component */
import SampleTask from 'components/tasks/sample/SampleTask';

/* types */
import {ISampleProcess, ISampleTask, ISampleTask2} from 'types/sample';
import SampleTask2 from 'components/tasks/sample/SampleTask2';

interface IProps {
  onClose(): void;
}

const defaultSampleProcessValue: ISampleProcess = {
  step1: 0,
  step2: null,
  step3: false,
  step4: null,
  step5: 0,
  step6: null,
  step7: false
};

function SampleProcess({onClose}: IProps): ReactElement {
  const [processData, setProcessData] = useState<ISampleProcess>(defaultSampleProcessValue);
  const [step, setStep] = useState(1);

  const next = (): void => {
    if (step < 2) setStep((prev) => prev + 1);
  };

  const onClosePage = (): void => {
    onClose();
  };

  const onConfirmTask = (key: string, taskData: ISampleTask): void => {
    const merged = {...processData, ...taskData};
    console.log('<<< value', key, merged);

    setProcessData(merged as ISampleProcess);

    next();
  };

  const onConfirmTask2 = (key: string, taskData: ISampleTask2): void => {
    const merged = {...processData, ...taskData};
    console.log('<<< value2', key, merged);

    setProcessData(merged as ISampleProcess);

    next();
  };

  return (
    <Process type="default">
      {step === 1 && <SampleTask onConfirm={onConfirmTask} onClose={onClosePage} />}
      {step === 2 && <SampleTask2 onConfirm={onConfirmTask2} />}
    </Process>
  );
}

export default SampleProcess;
