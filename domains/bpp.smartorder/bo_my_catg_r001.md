# 비플오더 메뉴관리 카테고리 조회 (bo_my_catg_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-20-S | 비플오더 메뉴관리 카테고리 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- CATG_REC

## 데이터 처리

### 비플오더 메뉴관리 카테고리 조회 (TB_BP_AFLT_MY_CATG_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY_CATG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_catg_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_catg_r001_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_CATG_R001.xml:10
