import {Task} from 'components/layouts';
import SampleView1 from 'components/views/sample/SampleView1';
import SampleView2 from 'components/views/sample/SampleView2';
import SampleView3 from 'components/views/sample/SampleView3';
import {ReactElement, useState} from 'react';
import {ISampleTask2} from 'types/sample';

interface IProps {
  onConfirm(name: string, data: ISampleTask2): void;
}

const defaultSampleTaskValue: ISampleTask2 = {
  step5: 0,
  step6: null,
  step7: false
};

function SampleTask2({onConfirm}: IProps): ReactElement {
  const [taskData, setTaskData] = useState<ISampleTask2>(defaultSampleTaskValue);
  const [index, setIndex] = useState(1);

  const next = (): void => {
    if (index < 4) setIndex((prev) => prev + 1);
  };

  const onClose = (): void => {
    setIndex(0);
  };

  const onBack = (): void => {
    setIndex((prev) => prev - 1);
  };

  const onConfirmView = (key: string, value: ISampleTask2[keyof ISampleTask2]): void => {
    const merged = {...taskData, [key]: value};
    console.log('<<< value', merged);

    setTaskData(merged);

    if (key === 'step7') onConfirm('sampleTask2', merged);

    next();
  };

  return (
    <Task type="some-style">
      {index === 1 && <SampleView1 data={taskData.step5} onClose={onClose} onConfirm={onConfirmView} />}
      {index === 2 && <SampleView2 data={taskData.step6} onBack={onBack} onConfirm={onConfirmView} />}
      {index === 3 && <SampleView3 data={taskData.step7} onBack={onBack} onClose={onClose} onConfirm={onConfirmView} />}
    </Task>
  );
}

export default SampleTask2;
