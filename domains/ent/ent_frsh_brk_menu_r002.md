# 다과신청 업체 메뉴조회 (ent_frsh_brk_menu_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-SNCK-10-30-20-S | 다과 예약 신청 (menu) | 화면 |

## 입력

- FRSH_BRK_CORP_SEQ

## 출력

- MSG
- 코드 (CODE)
- REC

## 데이터 처리

### 다과신청 업체 메뉴 조회 (TB_ENT_FRSH_BRK_CORP_R002)

- 종류: SELECT
- 테이블: TB_ENT_FRSH_BRK_CORP_MENU
- 입력: FRSH_BRK_CORP_SEQ

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_frsh_brk_menu_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_frsh_brk_menu_r002_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_R002.xml:10
