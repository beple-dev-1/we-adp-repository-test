# 오피스푸드(식사배송) 장바구니 - 조회 (bp_aflt_deliv_mybag_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-10-30-S | 오피스푸드(식사배송) 장바구니 | 화면 |

## 입력

- 처리상태 (PROC_ST)
- 앱코드 (APP_CD)
- 회원코드 (MEMB_CD)

## 출력

- 응답코드 (RES_CD)
- REC

## 데이터 처리

### 오피스푸드(식사배송) 장바구니 - 조회 (TB_BP_AFLT_DELIV_MENU_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_DELIV_MYBAG_MENU, TB_BP_AFLT_MYBAG
- 입력: 처리상태 (PROC_ST), 앱코드 (APP_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_mybag_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_mybag_r001_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MENU_R001.xml:10
