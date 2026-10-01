# 관리자_다과 신청 상태 변경 (ent_bo_frsh_brk_det_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MLPC-20-S | 다과 신청 내역 (list) | 화면 |

## 입력

- 처리상태 (PROC_ST)
- 회원코드 (MEMB_CD)
- FRSH_BRK_SEQ
- FRSH_BRK_SEQ_ARRAY
- ADM_USER_NM
- ADM_USER
- ADM_USER_MEMB_CD
- EMPL_NO
- MANAGER_COMMENT

## 출력

- MSG
- 코드 (CODE)
- REG_DTTM
- FRSH_BRK_TITLE
- TRX_DTTM
- CORP_NM
- 회원코드 (MEMB_CD)
- 휴대폰번호 (MOB_NO)

## 데이터 처리

### 관리자 다과신청 상태변경 (TB_ENT_FRSH_BRK_U003)

- 종류: UPDATE
- 테이블: TB_ENT_FRSH_BRK, TB_MEMBER
- 입력: 처리상태 (PROC_ST), ADM_USER_MEMB_CD, ADM_USER_MEMB_CD, EMPL_NO, ADM_USER_MEMB_CD, FRSH_BRK_SEQ, DYNAMIC_0

### 알림 템플릿 조회 (TB_ALARM_INFO_R001)

- 종류: SELECT
- 테이블: TB_ALARM_INFO
- 입력: ALARM_CTGR_TYPE_CD, ALARM_TYPE_CD, ALARM_TMPL_CD

### 현대 결제 알림 정보 조회 (TB_ENT_FRSH_BRK_R007)

- 종류: SELECT
- 테이블: TB_MEMBER_APP, TB_ENT_FRSH_BRK_CORP, TB_ENT_FRSH_BRK
- 입력: FRSH_BRK_SEQ

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_bo_frsh_brk_det_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_bo_frsh_brk_det_u001_act.jsp:42
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_U003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_R007.xml:10
