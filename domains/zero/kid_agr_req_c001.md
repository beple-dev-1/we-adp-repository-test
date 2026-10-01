# 만 14세미만 보호자 동의요청 적재 (kid_agr_req_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-PGM-30-10-10-S | PG_만 14세미만 회원가입 | 화면 |
| BPY-KID-20-S | 만 14세미만 회원가입 & 가맹점 찾기 서비스 이용시 진입 화면 | 화면 |

## 입력

- REQ_KID_MOB_NO
- REQ_KID_NM
- RECV_MOB_NO
- RECV_NM
- RECV_MEMB_CD
- STS
- SVC_TYPE
- RECV_BRT_DT
- REQ_BRT_DT

## 출력

- 거래일자 (TRX_DT)
- 거래번호 (SEQ)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 보호자 동의요청처리 일련번호 채번 (TB_KID_AGR_REQ_SEQ_R001)

- 종류: SELECT
- 테이블: (없음)
- 입력: (없음)

### 보호자 동의요청 적재 (TB_KID_AGR_REQ_C001)

- 종류: INSERT
- 테이블: TB_KID_AGR_REQ
- 입력: 거래일자 (TRX_DT), 거래번호 (SEQ), REQ_KID_MOB_NO, REQ_KID_NM, REQ_KID_BRT_DT, RECV_MOB_NO, RECV_NM, RECV_MEMB_CD, REQ_DTTM, ACTIVE_DTTM, STS, SVC_TYPE

## 실패

- 메시지: 만 14세미만 회원가입 일련번호 취득 오류
  - 조건: DomainUtil.isError(idoOutKARSR001) (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/kid_agr_req_c001_act.jsp:84)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.kid_agr_req_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/kid_agr_req_c001_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KID_AGR_REQ_SEQ_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KID_AGR_REQ_C001.xml:10
