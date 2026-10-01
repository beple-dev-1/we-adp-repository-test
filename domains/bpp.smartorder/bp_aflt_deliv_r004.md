# 오피스푸드 장바구니 데이터 확인 후 있으면 alert 없으면 장바구니에 추가 (bp_aflt_deliv_r004)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-10-20-S | 오피스푸드 메뉴 상세 | 화면 |

## 입력

- MENU_SCHEDULE_ID

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 오피스푸드 장바구니 SEQ 가져오기 (TB_BP_AFLT_MYBAG_R007)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MYBAG
- 입력: 회원코드 (MEMB_CD)

### 오피스푸드 장바구니에 데이터 유무 확인 (TB_BP_AFLT_DELIV_MYBAG_MENU_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_DELIV_MYBAG_MENU
- 입력: 가맹점 장바구니 순번 (MYBAG_SEQ), MENU_SCHEDULE_ID

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_r004.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_r004_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MYBAG_MENU_R001.xml:10
