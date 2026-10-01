# 엔터프라이즈_가맹점 어드민_메뉴 편집중 여부 수정(앱 버전) (ent_aflt_menu_reg_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBOA-20-10-S | 엔터프라이즈_가맹점 어드민_메뉴 관리 서비스(앱 버전) — 메뉴 추가/수정 step2(상세 폼) | HIT-MBOA-20-10-S-e22 |

## 입력

- MENU_SEQ
- 편집중여부 (BO_EDITING_YN)
- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- 응답코드 (CODE)
- 응답메시지 (MSG)

## 데이터 처리

### 가맹점주 어드민 편집중 여부 수정 (TB_CAFETERIA_MENU_U007)

- 종류: UPDATE
- 테이블: TB_CAFETERIA_MENU
- 입력: BO_EDITING_YN, 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_menu_reg_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_menu_reg_u001_act.jsp:32
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_U007.xml:10
