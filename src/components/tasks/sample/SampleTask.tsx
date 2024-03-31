'use client';

import {ReactElement, useState} from 'react';

/* layout */
import {Task} from 'components/layouts';

/* components */
import SampleView1 from 'components/views/sample/SampleView1';
import SampleView2 from 'components/views/sample/SampleView2';
import SampleView3 from 'components/views/sample/SampleView3';

/* type */
import {ISampleTask} from 'types/sample';

interface IProps {
  onClose(): void;
  onConfirm(name: string, data: ISampleTask): void;
}

const defaultSampleTaskValue: ISampleTask = {
  step1: 0,
  step2: null,
  step3: false,
  step4: null
};

function SampleTask({onClose, onConfirm}: IProps): ReactElement {
  const [taskData, setTaskData] = useState<ISampleTask>(defaultSampleTaskValue);
  const [index, setIndex] = useState(1);

  const next = (): void => {
    if (index < 4) setIndex((prev) => prev + 1);
  };

  const onBack = (): void => {
    setIndex((prev) => prev - 1);
  };

  const onConfirmView = (key: string, value: ISampleTask[keyof ISampleTask]): void => {
    const merged = {...taskData, [key]: value};
    console.log('<<< value', merged);

    setTaskData(merged as ISampleTask);

    if (key === 'step3') onConfirm('sampleTask', merged);

    next();
  };

  return (
    <Task type="default">
      {index === 1 && <SampleView1 data={taskData.step1} onClose={onClose} onConfirm={onConfirmView} />}
      {index === 2 && <SampleView2 data={taskData.step2} onBack={onBack} onConfirm={onConfirmView} />}
      {index === 3 && (
        <SampleView3 data={taskData.step3} onBack={onBack} onClose={() => setIndex(0)} onConfirm={onConfirmView} />
      )}
    </Task>
  );
}

export default SampleTask;
