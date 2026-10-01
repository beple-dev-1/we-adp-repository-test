# 다과관리 상세 조회 (ent_afltbo_frsh_brk_det_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-20-10-10-S | 다과 신청 내역 | 화면 |

## 입력

- FRSH_BRK_SEQ

## 출력

- CORP_NM
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
- REG_DTTM
- UPD_DTTM
- 거래시간 (TRX_TM)
- LOCATION_DESC
- MANAGER_EMAIL
- CONFIRM_AMT
- MANAGER_COMMENT
- 회원명 (MEMB_NM)
- CUR_WORK
- SITE_NM
- EMPL_NO
- MENU_REC
- 코드 (CODE)
- MSG

## 데이터 처리

### 다과신청관리 상세 조회 (TB_ENT_FRSH_BRK_R009)

- 종류: SELECT
- 테이블: TB_ENT_FRSH_BRK_CORP, TB_MEMBER, TB_WORK_CD_MNG, TB_ENT_CORP_SITE, TB_ENT_FRSH_BRK
- 입력: FRSH_BRK_SEQ

### 다과신청내억 조회 (TB_ENT_FRSH_BRK_MENU_R001)

- 종류: SELECT
- 테이블: TB_ENT_FRSH_BRK_MENU, TB_ENT_FRSH_BRK_CORP_MENU
- 입력: FRSH_BRK_SEQ

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_det_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_det_r001_act.jsp:21
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_R009.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MENU_R001.xml:10
