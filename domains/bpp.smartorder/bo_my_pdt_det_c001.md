# 비플오더 메뉴관리 메뉴 등록및수정,옵션 등록/삭제 (bo_my_pdt_det_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-50-10-S | 비플오더 메뉴관리 메뉴 상세 | BPG-OBO-50-10-S-e20 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- 비플오더메뉴순번 (BP_AFLT_PDT_SEQ)
- IMG_FILE_NM
- RCMD_YN
- 앱코드 (APP_CD)
- 가맹점ID (AFLT_ID)
- OPT_YN
- THUMB_IMG_PATH
- PDT_NM
- IMG_FILE_EXT
- PDT_INFO
- THUMB_IMG_FILE_NM
- IMG_PATH
- BP_AFLT_CATG_SEQ
- OLD_CATG_SEQ
- PDT_PRICE
- THUMB_IMG_EXT
- ADULT_LVL
- SPOOF_LVL
- MEDICAL_LVL
- VIOLENCE_LVL
- RACY_LVL
- DSP_SEQ
- IMG_PATH_INFO
- THUMB_IMG_PATH_INFO
- 주문가능시간변경여부 (ODR_TM_CHG_YN)
- 주문가능시작시간 (STR_TM)
- 주문가능종료시간 (END_TM)
- 오더퀸프린터번호 (PRT_NO)
- 오더퀸메뉴코드 (ODQ_MENU_CD)
- OPT_DEL_REC
- OPT_ADD_REC

## 출력

- 오더퀸정보저장여부 (ODQ_SAVE_YN)

## 데이터 처리

### 가맹점원장조회(by bp_aflt_seq) (TB_BP_AFLT_MY_R006)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### 비플오더 메뉴 등록/수정 (TB_BP_AFLT_MY_PDT_INFO_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_CATG_PDT
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 비플오더메뉴순번 (BP_AFLT_PDT_SEQ), IMG_FILE_NM, RCMD_YN, 앱코드 (APP_CD), 가맹점ID (AFLT_ID), OPT_YN, THUMB_IMG_PATH, PDT_NM, IMG_FILE_EXT, PDT_INFO, THUMB_IMG_FILE_NM, IMG_PATH, 비플가맹점순번 (BP_AFLT_SEQ), BP_AFLT_CATG_SEQ, PDT_PRICE, THUMB_IMG_EXT, ADULT_LVL, SPOOF_LVL, MEDICAL_LVL, VIOLENCE_LVL, RACY_LVL, PDT_PRICE, DSP_SEQ, 비플가맹점순번 (BP_AFLT_SEQ), BP_AFLT_CATG_SEQ, DSP_SEQ

### 비플오더 메뉴 주문가능시간 수정 (TB_BP_AFLT_MY_PDT_INFO_U004)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MY_PDT_INFO
- 입력: 주문가능시작시간 (STR_TM), 주문가능종료시간 (END_TM), 비플가맹점순번 (BP_AFLT_SEQ), 비플오더메뉴순번 (BP_AFLT_PDT_SEQ)

### 비플오더 메뉴 오더퀸정보 수정 (TB_BP_AFLT_MY_PDT_INFO_U005)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MY_PDT_INFO
- 입력: 오더퀸프린터번호 (PRT_NO), 오더퀸메뉴코드 (ODQ_MENU_CD), 비플가맹점순번 (BP_AFLT_SEQ), 비플오더메뉴순번 (BP_AFLT_PDT_SEQ)

### 비플오더 메뉴 옵션카테고리 삭제 (TB_BP_AFLT_PDT_OPT_CATG_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_PDT_OPT_CATG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), BP_AFLT_OPT_CATG_SEQ, BP_AFLT_OPT_CATG_SEQ, 비플오더메뉴순번 (BP_AFLT_PDT_SEQ), 비플오더메뉴순번 (BP_AFLT_PDT_SEQ)

### 비플오더 메뉴 옵션 카테고리 수정 및 등록(메뉴등록시) (TB_BP_AFLT_PDT_OPT_CATG_U001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_PDT_OPT_CATG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 비플오더메뉴순번 (BP_AFLT_PDT_SEQ), BP_AFLT_OPT_CATG_SEQ, DSP_SEQ

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_pdt_det_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_pdt_det_c001_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_U004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_U005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_PDT_OPT_CATG_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_PDT_OPT_CATG_U001.xml:10
