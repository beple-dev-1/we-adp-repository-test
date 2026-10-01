# 더보기>비대면결제내역>상세>댓글조회 (main_onaf_complete_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-HIST-20-S | 더보기>비대면결제내역>상세 | 화면 |

## 입력

- TRX_DT
- TRX_SEQ

## 출력

- REC

## 데이터 처리

### 비대면 댓글 목록 조회 (TB_ONLN_TRAN_RPY_R001)

- 종류: SELECT
- 테이블: TB_ONLN_TRAN_RPY
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_onaf_complete_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/main_onaf_complete_r001_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_TRAN_RPY_R001.xml:10
