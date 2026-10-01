# 비플오더 메뉴관리 옵션 카테고리 삭제(옵션 및 메뉴 도 삭제) (bo_my_opt_d001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-30-S | 비플오더 메뉴관리 옵션 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- BP_AFLT_OPT_CATG_SEQ
- 비플오더메뉴순번 (BP_AFLT_PDT_SEQ)
- BP_AFLT_OPT_SEQ

## 출력

- (없음)

## 데이터 처리

### 비플오더 메뉴 옵션카테고리 삭제 (TB_BP_AFLT_PDT_OPT_CATG_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_PDT_OPT_CATG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), BP_AFLT_OPT_CATG_SEQ, BP_AFLT_OPT_CATG_SEQ, 비플오더메뉴순번 (BP_AFLT_PDT_SEQ), 비플오더메뉴순번 (BP_AFLT_PDT_SEQ)

### 비플오더 옵션 삭제 (TB_BP_AFLT_OPT_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_OPT
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), BP_AFLT_OPT_CATG_SEQ, BP_AFLT_OPT_SEQ, BP_AFLT_OPT_SEQ

### 비플오더 옵션 카테고리 삭제 (TB_BP_AFLT_OPT_CATG_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_OPT_CATG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), BP_AFLT_OPT_CATG_SEQ

### 비플오더 메뉴 옵션 여부 수정 (TB_BP_AFLT_MY_PDT_INFO_U003)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_PDT_OPT_CATG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_opt_d001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_opt_d001_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_PDT_OPT_CATG_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_OPT_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_OPT_CATG_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_U003.xml:10
