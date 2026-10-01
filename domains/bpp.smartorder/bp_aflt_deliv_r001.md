# 푸드오피스 메뉴 조회 (bp_aflt_deliv_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-10-S | 오피스푸드 메인 | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- 비플가맹점순번 (BP_AFLT_SEQ)
- 거래일자 (TRX_DT)

## 출력

- REC
- DEADLINE
- DAY_DIGIT

## 데이터 처리

### 오피스푸드 메뉴 조회 (TB_BP_AFLT_DELIV_MENU_R004)

- 종류: SELECT
- 테이블: TB_MEMBER_APP_DELIV, TB_BP_AFLT_DELIV_MENU
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 비플가맹점순번 (BP_AFLT_SEQ), 거래일자 (TRX_DT), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 비플가맹점순번 (BP_AFLT_SEQ), 거래일자 (TRX_DT), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 비플가맹점순번 (BP_AFLT_SEQ), 거래일자 (TRX_DT)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_r001_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MENU_R004.xml:10
