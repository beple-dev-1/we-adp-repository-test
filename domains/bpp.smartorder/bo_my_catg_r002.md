# 카테고리메뉴 수 (bo_my_catg_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-20-S | 비플오더 메뉴관리 카테고리 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- BP_AFLT_CATG_SEQ

## 출력

- 수량 (PDT_CNT)

## 데이터 처리

### 비플오더 카테고리 메뉴 조회(체크) (TB_BP_AFLT_CATG_PDT_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_CATG_PDT
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), BP_AFLT_CATG_SEQ

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_catg_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_catg_r002_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_CATG_PDT_R001.xml:10
