# 브랜드상품권 웹뷰 API 휴대폰 본인인증 확인 (brnd_gift_member_stop_u001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-BRND-20-S | 브랜드상품권 회원 서비스 중지 | 화면 |

## 입력

- 휴대폰번호 (MOB_NO)
- 거래번호 (TRX_SEQ)
- 인증번호 (APRV_NO)
- 회원명 (MEMB_NM)
- 생년월일 (BRT_DT)
- 내외국인구분 (IN_FRN_TP)
- 통신사 (TELE_CORP)
- PUSH_ID
- 마켓팅 정보 수신동의여부 (MRKT_AGREE_YN)
- BRT_GNDR
- 앱코드 (APP_CD)
- 성별 (GNDR)
- NMA_DEV_ID
- NMA_MODEL
- NMA_NETNM
- NMA_PLF
- NMA_PLF_VER
- B_CI

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 회원코드 (MEMB_CD)
- 암호잠금 설정여부 (LOCK_YN)
- 생체인증설정여부 (BIO_LOCK_YN)
- 생체로그인여부 (BIO_LOGIN_YN)
- 마케팅 정보 수신동의 메시지 내용 (POP_MSG)
- 에러여부 (ERROR_YN)
- ERROR_MSG
- NEW_MEMB_YN
- TOKEN
- MEMB_ST
- 회원명 (MEMB_NM)
- 휴대폰번호 (MOB_NO)
- FIN_CONN_DT

## 데이터 처리

### 서비스상태변경 전 고객 정보 조회 (TB_MEMBER_BRND_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: CI

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_member_stop_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_member_stop_u001_act.jsp:42
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_BRND_R001.xml:10
