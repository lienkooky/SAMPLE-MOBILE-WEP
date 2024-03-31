'use client';

import {PropsWithChildren, ReactElement} from 'react';

/* recoil */
import {RecoilRoot} from 'recoil';

export default function RecoilProvider({children}: PropsWithChildren): ReactElement {
  return <RecoilRoot>{children}</RecoilRoot>;
}
