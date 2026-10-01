# 관리자_다과신청_내역조회 (ent_bo_frsh_brk_list_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MLPC-20-S | 다과 신청 내역 (list) | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- PAGE_NUM
- FILTER_DATE
- FILTER_DATE_START
- FILTER_DATE_END
- FILTER_PROC_ST
- FILTER_NM_NO
- FILTER_SITE_CD

## 출력

- MSG
- 코드 (CODE)
- REC

## 데이터 처리

### 관리자_다과신청 내역 조회 (TB_ENT_FRSH_BRK_R004)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_ENT_FRSH_BRK, TB_ENT_FRSH_BRK_CORP, TB_ENT_CORP_SITE, TB_WORK_CD_MNG
- 입력: DYNAMIC_0, DYNAMIC_1, DYNAMIC_2, PAGE_NUM, PAGE_NUM

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_bo_frsh_brk_list_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_bo_frsh_brk_list_r001_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_R004.xml:10
