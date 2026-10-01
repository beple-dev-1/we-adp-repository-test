# 사내 카페 메뉴 조회 (ent_smt_odr_menu)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-34-S | 가맹점 상세 기본정보_v2 | 화면 |
| HIT-ORDR-58-S | 가맹점 상세 기본정보 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- 비플오더메뉴순번 (BP_AFLT_PDT_SEQ)
- 가맹점 장바구니 순번 (MYBAG_SEQ)
- 장바구니 메뉴 순번 (MYBAG_PDT_SEQ)
- 수량 (PDT_CNT)
- 옵션리스트 (OPT_LIST)
- 수령방법 (RECV_TYPE)

## 출력

- 이미지경로 (IMG_PATH)
- 썸네일이미지경로 (THUMB_IMG_PATH)
- 메뉴이름 (MENU)
- 메뉴 영문명 (ENG_MENU)
- 메뉴설명 (DESCRIPTION)
- 가격 (PRICE)
- 옵션그룹 (OPT_GROUP)
- 옵션여부 (OPT_YN)
- 품절여부 (SOLDOUT_YN)
- 가맹점영업여부 (CLOSE_YN)
- 개별주문최대수량 (LMT_CNT)
- 주문제한여부 (LMT_ODR_YN)
- 메뉴주문가능여부 (PDT_YN)
- OPT_LIST

## 데이터 처리

### 비플오더 메뉴 조회 (TB_BP_AFLT_MY_PDT_INFO_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_APP, TB_BP_AFLT_MY_PDT_INFO
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 비플가맹점순번 (BP_AFLT_SEQ), 비플오더메뉴순번 (BP_AFLT_PDT_SEQ)

### 비플오더 영업시간 조회 (TB_AFFILIATION_MY_WT_INFO_R002)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_AFFILIATION_MY_WT_INFO
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), DYNAMIC_0

### 비플오더 옵션 조회 (TB_BP_AFLT_PDT_OPT_CATG_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_PDT_OPT_CATG, TB_BP_AFLT_OPT_CATG, TB_BP_AFLT_OPT
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), BP_AFLT_PDT_SEQ

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_menu.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_menu_act.jsp:21
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_PDT_OPT_CATG_R001.xml:10
