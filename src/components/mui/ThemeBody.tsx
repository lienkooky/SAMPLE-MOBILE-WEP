'use client';

import {PropsWithChildren, ReactElement} from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from 'components/mui/theme';

function ThemeBody({children}: PropsWithChildren): ReactElement {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeBody;
