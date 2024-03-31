'use client';

import {ReactElement, SyntheticEvent, useState} from 'react';

/* layouts */
import {PageContainer, PageHeader, PageBody} from 'components/layouts';

/* Mui */
import {Button} from '@mui/material';
import {Row} from 'components/mui/theme';

/* component */
import SampleProcess from 'components/processes/sample/SampleProcess';

interface ISample {
  name: string;
  component: ReactElement | null;
  isProcess?: boolean;
}

function SamplePage(): ReactElement {
  const [index, setIndex] = useState<number | null>(null);
  const sampleList: ISample[] = [{name: '샘플리스트', component: <SampleProcess onClose={() => setIndex(null)} />}];

  // const onBack = (): void => {
  //   setIndex(null);
  // };

  // const onClose = (): void => {
  //   setIndex(null);
  // };

  // const onConfirm = (...rest: unknown[]): void => {
  //   setIndex(null);
  //   console.log(rest);
  // };

  /* SyntheticEvent를 사용할 때는 React가 추상화한 이벤트 객체에 접근
     SyntheticEvent는 브라우저 이벤트 객체의 일부 정보만 가지고 있음
     SyntheticEvent는 특정한 정보(Change,Mouse)에 접근할 수 있는 API를 제공하지 않음
  */
  const onClick = (event: SyntheticEvent): void => {
    const {name} = event.target as HTMLButtonElement;
    setIndex(Number(name));
  };

  return (
    <PageContainer>
      <PageHeader title="작업물 리스트" />
      <PageBody>
        {sampleList.map((sample, index) => (
          <Row style={{padding: 10}} key={index.toString()}>
            <Button
              style={{justifyContent: 'left', fontSize: 14, height: 40}}
              variant={sample.isProcess ? 'outlined' : 'contained'}
              disabled={sample.component === null}
              name={index.toString()}
              onClick={onClick}
              fullWidth
            >
              {sample.name}
            </Button>
          </Row>
        ))}
        {index !== null && sampleList[index].component}
      </PageBody>
    </PageContainer>
  );
}

export default SamplePage;
