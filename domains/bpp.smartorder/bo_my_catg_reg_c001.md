# 비플오더 메뉴관리 카테고리 추가/수정 (bo_my_catg_reg_c001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-20-10-S | 비플오더 메뉴관리 카테고리 추가/수정 | BPG-OBO-20-10-S-e05 |

## 입력

- BP_AFLT_CATG_NM
- 비플가맹점순번 (BP_AFLT_SEQ)
- BP_AFLT_CATG_SEQ
- 앱코드 (APP_CD)

## 출력

- (없음)

## 데이터 처리

### 비플오더 메뉴관리 카테고리 추가/수정 (TB_BP_AFLT_MY_CATG_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_MY_CATG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), BP_AFLT_CATG_SEQ, BP_AFLT_CATG_NM, 비플가맹점순번 (BP_AFLT_SEQ), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_catg_reg_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_catg_reg_c001_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_CATG_C001.xml:10
