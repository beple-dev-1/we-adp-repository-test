# 비플오더 메뉴관리 옵션 카테고리 메뉴 등록및수정및삭제 (bo_my_opt_det_c001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-30-10-S | 비플오더 메뉴관리 옵션 상세 | BPG-OBO-30-10-S-e13 |

## 입력

- OPT_CATG_NM
- 비플가맹점순번 (BP_AFLT_SEQ)
- BP_AFLT_OPT_CATG_SEQ
- 앱코드 (APP_CD)
- OPT_DEL_REC
- OPT_ADD_REC
- PDT_DEL_REC
- PDT_ADD_REC

## 출력

- (없음)

## 데이터 처리

### 비플오더 메뉴관리 옵션 카테고리 추가/수정 (TB_BP_AFLT_OPT_CATG_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_OPT_CATG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), BP_AFLT_OPT_CATG_SEQ, OPT_CATG_NM, 비플가맹점순번 (BP_AFLT_SEQ), 앱코드 (APP_CD)

### 비플오더 옵션 삭제 (TB_BP_AFLT_OPT_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_OPT
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), BP_AFLT_OPT_CATG_SEQ, BP_AFLT_OPT_SEQ, BP_AFLT_OPT_SEQ

### 비플오더 메뉴관리 옵션 추가/수정 (TB_BP_AFLT_OPT_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_OPT
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), BP_AFLT_OPT_CATG_SEQ, BP_AFLT_OPT_SEQ, OPT_NM, OPT_PRICE, OPT_TYPE, DSP_SEQ, 앱코드 (APP_CD)

### 비플오더 메뉴 옵션카테고리 삭제 (TB_BP_AFLT_PDT_OPT_CATG_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_PDT_OPT_CATG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), BP_AFLT_OPT_CATG_SEQ, BP_AFLT_OPT_CATG_SEQ, 비플오더메뉴순번 (BP_AFLT_PDT_SEQ), 비플오더메뉴순번 (BP_AFLT_PDT_SEQ)

### 비플오더 메뉴 옵션 카테고리 등록 (TB_BP_AFLT_PDT_OPT_CATG_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_PDT_OPT_CATG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 비플오더메뉴순번 (BP_AFLT_PDT_SEQ), BP_AFLT_OPT_CATG_SEQ, 비플가맹점순번 (BP_AFLT_SEQ), 비플오더메뉴순번 (BP_AFLT_PDT_SEQ)

### 비플오더 메뉴 옵션 여부 수정 (TB_BP_AFLT_MY_PDT_INFO_U003)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_PDT_OPT_CATG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_opt_det_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_opt_det_c001_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_OPT_CATG_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_OPT_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_OPT_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_PDT_OPT_CATG_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_PDT_OPT_CATG_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_U003.xml:10
