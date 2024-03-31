'use client';

import {ReactElement} from 'react';

/* layouts */
import {PageContainer, PageBody} from 'components/layouts';

/* view */
import Home from 'components/views/home/Home';

export default function RootPage(): ReactElement {
  return (
    <PageContainer>
      <PageBody>
        <Home />
      </PageBody>
    </PageContainer>
  );
}
