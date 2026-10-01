# 다과신청 사업장 정보조회 (ent_bo_frsh_brk_list_r003)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MLPC-20-S | 다과 신청 내역 (list) | 화면 |

## 입력

- BSUN_ID

## 출력

- REC
- MSG
- 코드 (CODE)

## 데이터 처리

### 사업장_정보조회 (TB_ENT_CORP_SITE_R003)

- 종류: SELECT
- 테이블: TB_ENT_CORP_SITE
- 입력: (없음)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_bo_frsh_brk_list_r003.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_bo_frsh_brk_list_r003_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_CORP_SITE_R003.xml:10
