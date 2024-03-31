'use client';

import {ReactElement} from 'react';
import {useRouter} from 'next/navigation';

/* layouts */
import {ViewBody, ViewContainer, ViewHeader} from 'components/layouts';

/* Mui */
import {Button} from '@mui/material';
import {Col, Row} from 'components/mui/theme';

function Home(): ReactElement {
  const router = useRouter();

  return (
    <ViewContainer>
      <ViewHeader title="HOME" />
      <ViewBody>
        <Col>
          <Row sx={{pt: 5, pb: 5}}>
            <Button onClick={() => router.push('/sample')}>to SampleList</Button>
          </Row>
        </Col>
      </ViewBody>
    </ViewContainer>
  );
}

export default Home;
