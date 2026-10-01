# 보호자 동의요청 처리결과조회 (kid_agr_req_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-PGM-30-10-10-S | PG_만 14세미만 회원가입 | 화면 |
| BPY-KID-20-S | 만 14세미만 회원가입 & 가맹점 찾기 서비스 이용시 진입 화면 | 화면 |

## 입력

- 거래일자 (TRX_DT)
- 거래번호 (SEQ)
- REQ_KID_MOB_NO
- SVC_TYPE

## 출력

- STS

## 데이터 처리

### 보호자 동의요청 처리결과조회 (TB_KID_AGR_REQ_R002)

- 종류: SELECT
- 테이블: TB_KID_AGR_REQ
- 입력: 거래일자 (TRX_DT), 거래번호 (SEQ), REQ_KID_MOB_NO, SVC_TYPE

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.kid_agr_req_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/kid_agr_req_r002_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KID_AGR_REQ_R002.xml:10
