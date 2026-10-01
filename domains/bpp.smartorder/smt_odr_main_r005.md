# 오피스푸드 매장 select (smt_odr_main_r005)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-ORDR-30-S | 비플오더 가맹점 관리에 신청 가맹점 노출 | 화면 |

## 입력

- LAT
- LNG

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- REC

## 데이터 처리

### 오피스푸드 매장 select (TB_BP_AFLT_MY_R011)

- 종류: SELECT
- 테이블: CAST, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_MY
- 입력: LAT, LNG, LAT, LNG, 앱코드 (APP_CD), 앱코드 (APP_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_main_r005.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_main_r005_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R011.xml:10
