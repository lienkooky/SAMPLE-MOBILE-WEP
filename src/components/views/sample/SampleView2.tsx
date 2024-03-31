'use client';

import {ChangeEvent, ReactElement, useState} from 'react';

/* layouts */
import {ViewBody, ViewContainer, ViewFloatingFooter, ViewHeader} from 'components/layouts';

/* Mui */
import {Button, TextField} from '@mui/material';

interface IProps {
  data?: string | null;
  onBack(): void;
  onConfirm(key: string, data: string | null): void;
}

/**
 * sample2
 * @returns
 */
function SampleView2({data = null, onBack, onConfirm}: IProps): ReactElement {
  const [step2, setStep2] = useState(data);

  const onChange = (event: ChangeEvent): void => {
    const {value} = event.target as HTMLInputElement;
    setStep2(value);
  };

  const onClickConfirm = (): void => {
    onConfirm('step2', step2);
  };

  return (
    <ViewContainer>
      <ViewHeader title="2단계" onBack={onBack} />
      <ViewBody>
        <TextField value={step2 || ''} InputProps={{fullWidth: true}} onChange={onChange} />
        <p>
          자산진단 분석 - 결과 전체 내용 목표기반 분석 - 결과 전체 내용 스타일 분석 - 결과 전체 내용 성향분석 인트로 1
          성향분석 인트로 2 성향분석 인트로 3 성향분석 인트로 4 콴텍 성향분석 문항 1 콴텍 성향분석 문항 2 콴텍 성향분석
          문항 3 콴텍 성향분석 문항 4 콴텍 성향분석 문항 5 스타일분석 문항 1 스타일분석 문항 2 스타일분석 문항 3
          스타일분석 문항 4 성향분석 결과 - 등록 전 내 성향 분석 보기 성향분석 개편 안내 홈 콴텍 이용 약관 목록 콴텍
          이용 약관 상세 휴대전화 본인 인증 - 이름 입력 휴대전화 본인 인증 - 주민등록번호 입력 휴대전화 본인 인증 -
          통신사 선택 휴대전화 본인 인증 - 통신사 선택 팝업 휴대전화 본인 인증 - 휴대전화 번호 입력/약관동의 휴대전화
          본인 인증 - 휴대전화번호 입력 - 유효성 검사 휴대전화 본인 인증 - 휴대전화번호 입력 완료 휴대전화 본인 인증 -
          휴대전화 인증 약관 목록
          <br />
          자산진단 분석 - 결과 전체 내용 목표기반 분석 - 결과 전체 내용 스타일 분석 - 결과 전체 내용 성향분석 인트로 1
          성향분석 인트로 2 성향분석 인트로 3 성향분석 인트로 4 콴텍 성향분석 문항 1 콴텍 성향분석 문항 2 콴텍 성향분석
          문항 3 콴텍 성향분석 문항 4 콴텍 성향분석 문항 5 스타일분석 문항 1 스타일분석 문항 2 스타일분석 문항 3
          스타일분석 문항 4 성향분석 결과 - 등록 전 내 성향 분석 보기 성향분석 개편 안내 홈 콴텍 이용 약관 목록 콴텍
          이용 약관 상세 휴대전화 본인 인증 - 이름 입력 휴대전화 본인 인증 - 주민등록번호 입력 휴대전화 본인 인증 -
          통신사 선택 휴대전화 본인 인증 - 통신사 선택 팝업 휴대전화 본인 인증 - 휴대전화 번호 입력/약관동의 휴대전화
          본인 인증 - 휴대전화번호 입력 - 유효성 검사 휴대전화 본인 인증 - 휴대전화번호 입력 완료 휴대전화 본인 인증 -
          휴대전화 인증 약관 목록
        </p>
      </ViewBody>
      <ViewFloatingFooter btnType="full">
        <Button fullWidth disabled={!step2?.length} onClick={onClickConfirm}>
          다음
        </Button>
      </ViewFloatingFooter>
    </ViewContainer>
  );
}

export default SampleView2;
