'use client';

import {ReactElement} from 'react';

/* style*/
import CommonImages from 'assets/images/CommonImages';

/* layouts */
import {ViewBody, ViewContainer, ViewHeader} from 'components/layouts';

/* Mui */
import {Box} from '@mui/material';
import {Row} from 'components/mui/theme';

interface IProps {
  onBack?(): void;
  onClose?(): void;
  onConfirm(bool: boolean): void;
}

/**
 * 로그인
 * @returns
 */
function Login({onBack, onClose, onConfirm}: IProps): ReactElement {
  return (
    <ViewContainer>
      <ViewHeader title="로그인" onBack={onBack} onClose={onClose} />
      <ViewBody>
        <div>
          <Row style={{alignItems: 'center', justifyContent: 'center', height: 246}}>
            <img src={CommonImages.get('logo')} alt="logo" />
          </Row>
          <Box component="form" style={{padding: 3, paddingTop: 0}}>
            say hi!
          </Box>
        </div>
      </ViewBody>
    </ViewContainer>
  );
}

export default Login;
