# MY가맹점 > 가맹점 인증 (zero_my_prvt)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-HIST-20-S | 더보기>비대면결제내역>상세 | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)

## 출력

- 회원코드 (MEMB_CD)
- 휴대폰번호 (MOB_NO)
- 통신사 (TELE_CORP)
- DVC_ID
- APP_TP
- APP_ID
- PUSH_ID
- 모델명 (MDL_NM)
- OS
- 푸쉬등록여부 (PUSH_REG_YN)
- PUSH_APR_NOTI_YN
- PUSH_LMT_TM_YN
- PUSH_LMT_STR_TM
- PUSH_LMT_END_TM
- AUTO_LOGIN_YN
- 생체로그인여부 (BIO_LOGIN_YN)
- 비밀번호 (PWD)
- 거래승인번호 등록 여부 (TRX_PWD_REG_YN)
- 거래승인번호 (TRX_PWD)
- ENC_SALT
- FIN_CONN_DT
- PWD_FAIL_CNT
- TRX_PWD_FAIL_CNT
- PWD_CHNG_DT
- TRX_PWD_CHNG_DT
- MEMB_ST
- MRKT_AGR_YN
- REG_DTTM
- UPD_DTTM
- JSESSION_ID
- ONAF_AGR_YN
- ONAF_AGR_DT
- MY_AFLT_AGR_YN
- MY_AFLT_AGR_DT

## 데이터 처리

### 회원정보조회(부가정보) (TB_MEMBER_APP_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_my_prvt.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_my_prvt_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10
