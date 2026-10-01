# 다과신청 등록 (ent_frsh_brk_settle_c001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-SNCK-10-30-40-S | 다과 예약 신청 (settle) | 화면 |

## 입력

- MENU_INFO_STR
- FRSH_BRK_SEQ
- FRSH_BRK_TITLE
- 거래일자 (TRX_DT)
- MEMB_CNT
- 내용 (CTNT)
- REQUIREMENT
- 처리상태 (PROC_ST)
- 결제금액 (AMT)
- 회원코드 (MEMB_CD)
- EST_AMT
- MANAGER_NM
- MANAGER_DEPT
- MANAGER_TEL_NO
- MANAGER_EMAIL
- LOCATION_DESC
- 거래시간 (TRX_TM)
- MANAGER_COMMENT
- FRSH_BRK_CORP_SEQ
- MENU_ID
- 메뉴개수 (MENU_CNT)
- MENU_AMT
- PACKAGE_YN
- FRSH_BRK_MENU_SEQ
- FRSH_BRK_CORP_CATG_SEQ
- SITE_CD
- CUR_WORK
- 앱코드 (APP_CD)

## 출력

- MSG
- 코드 (CODE)

## 데이터 처리

### 다과 신청 저장 (TB_ENT_FRSH_BRK_C001)

- 종류: INSERT
- 테이블: TB_ENT_FRSH_BRK, TB_MEMBER_ENT_APP
- 입력: FRSH_BRK_SEQ, FRSH_BRK_TITLE, 거래일자 (TRX_DT), MEMB_CNT, 내용 (CTNT), REQUIREMENT, 처리상태 (PROC_ST), 결제금액 (AMT), 회원코드 (MEMB_CD), EST_AMT, MANAGER_NM, MANAGER_DEPT, MANAGER_TEL_NO, 회원코드 (MEMB_CD), MANAGER_EMAIL, LOCATION_DESC, 거래시간 (TRX_TM), MANAGER_COMMENT, FRSH_BRK_CORP_SEQ, 앱코드 (APP_CD), 회원코드 (MEMB_CD), SITE_CD, CUR_WORK, 앱코드 (APP_CD)

### 다과신청 메뉴 저장 (TB_ENT_FRSH_BRK_MENU_C001)

- 종류: INSERT
- 테이블: TB_ENT_FRSH_BRK_MENU
- 입력: FRSH_BRK_SEQ, FRSH_BRK_CORP_SEQ, MENU_ID, 메뉴개수 (MENU_CNT), MENU_AMT, 결제금액 (AMT), PACKAGE_YN, 회원코드 (MEMB_CD), FRSH_BRK_MENU_SEQ, FRSH_BRK_CORP_CATG_SEQ

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_frsh_brk_settle_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_frsh_brk_settle_c001_act.jsp:39
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MENU_C001.xml:10
