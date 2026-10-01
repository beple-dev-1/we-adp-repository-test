# 오피스푸드 상세 (bp_aflt_deliv)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-10-S | 비플오더 가맹점 관리에 신청 가맹점 노출 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- LOC_TITLE
- SPOT_TITLE_1
- SPOT_TITLE_2
- ADDR1
- ADDR2
- SHOP_NM
- BUSINESS
- 메뉴개수 (MENU_CNT)
- TOT_AMT
- PROFILE_IMG_PATH

## 데이터 처리

### 푸드오피스 메뉴 조회 (TB_MEMBER_APP_DELIV_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_APP_DELIV, TB_BP_AFLT_MNG, TB_BP_AFLT_MYBAG, TB_BP_AFLT_DELIV_MYBAG_MENU, TB_BP_AFLT_MY, TB_CTGR_CATG_CD
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 비플가맹점순번 (BP_AFLT_SEQ), 회원코드 (MEMB_CD)

### 오피스푸드 메뉴 조회 (TB_BP_AFLT_DELIV_MENU_R005)

- 종류: SELECT
- 테이블: TB_BP_AFLT_DELIV_MENU
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), STR_TRX_DT, END_TRX_DT

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_act.jsp:35
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_DELIV_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MENU_R005.xml:10
