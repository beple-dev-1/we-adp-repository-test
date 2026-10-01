# 다과주문관리 메인 조회 (ent_afltbo_frsh_brk_list_r001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-20-10-10-S | 다과 신청 내역 | 화면 |

## 입력

- 시작일자 (START_DT)
- 종료일자 (END_DT)
- 처리상태 (PROC_ST)
- SITE_CD
- 검색어 (SEARCH_KEYWORD)
- 페이지 (PAGE)
- PAGE_SIZE

## 출력

- REC
- 조회건수 (RES_CNT)

## 데이터 처리

### 다과신청 제공업체 조회 (TB_ENT_FRSH_BRK_CORP_R003)

- 종류: SELECT
- 테이블: TB_ENT_FRSH_BRK_CORP
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), DYNAMIC_0

### 다과신청 제공업체 등록 (TB_ENT_FRSH_BRK_CORP_C001)

- 종류: INSERT
- 테이블: TB_ENT_FRSH_BRK_CORP
- 입력: FRSH_BRK_CORP_SEQ, CORP_NM, CORP_ST, REG_USER, 사업자번호 (BIZ_NO), 비플가맹점순번 (BP_AFLT_SEQ)

### 다과신청관리 조회 (TB_ENT_FRSH_BRK_R008)

- 종류: SELECT
- 테이블: TB_ENT_CORP_SITE, TB_WORK_CD_MNG, TB_ENT_FRSH_BRK, TB_MEMBER, TB_ENT_FRSH_BRK_CORP
- 입력: 시작일자 (START_DT), 종료일자 (END_DT), DYNAMIC_0, 시작일자 (START_DT), 종료일자 (END_DT), DYNAMIC_1, DYNAMIC_2

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_list_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_list_r001_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_R008.xml:10
