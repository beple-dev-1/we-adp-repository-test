# 만14세미만 회원 보호자 동의처리 (kid_agr_req_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-KID-10-S | 보호자가 앱 사용자인 경우 호출되는 웹뷰 | BPY-KID-10-S-e03, BPY-KID-10-S-e04 |
| BPY-KID-30-S | 보호자가 앱 미설치자인경우 호출되는 웹페이지 | BPY-KID-30-S-e21 |

## 입력

- 휴대폰번호 (MOB_NO)
- 거래번호 (TRX_SEQ)
- 인증번호 (APRV_NO)
- 통신사 (TELE_CORP)
- 회원명 (MEMB_NM)
- SVC_TYPE
- 거래번호 (SEQ)
- 거래일자 (TRX_DT)
- REQ_MOB_NO
- FLAG
- 동의여부 (AGR_YN)
- 주민번호 (REGS_NO)
- 생년월일 (BRT_DT)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 보호자동의요청관리원장 조회 (TB_KID_AGR_REQ_R001)

- 종류: SELECT
- 테이블: TB_KID_AGR_REQ
- 입력: 거래일자 (TRX_DT), 거래번호 (SEQ), 휴대폰번호 (MOB_NO), SVC_TYPE

### 보호자동의요청관리원장 결과반영 (TB_KID_AGR_REQ_U001)

- 종류: UPDATE
- 테이블: TB_KID_AGR_REQ
- 입력: RECV_MOB_NO, RECV_NM, RECV_MEMB_CD, UPD_DTTM, STS, 거래일자 (TRX_DT), 거래번호 (SEQ), REQ_KID_MOB_NO, SVC_TYPE

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.kid_agr_req_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/kid_agr_req_u001_act.jsp:35
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KID_AGR_REQ_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KID_AGR_REQ_U001.xml:10
