# 비플오더 메뉴 품절,숨김 수정 (bo_my_pdt_u002)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-50-S | 비플오더 메뉴관리 메뉴 | 화면 |

## 입력

- 품절여부 (SOLDOUT_YN)
- HIDE_YN
- 비플가맹점순번 (BP_AFLT_SEQ)
- 비플오더메뉴순번 (BP_AFLT_PDT_SEQ)

## 출력

- (없음)

## 데이터 처리

### 비플오더 메뉴 품절,숨김 수정 (TB_BP_AFLT_MY_PDT_INFO_U002)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MY_PDT_INFO
- 입력: 품절여부 (SOLDOUT_YN), HIDE_YN, 비플가맹점순번 (BP_AFLT_SEQ), 비플오더메뉴순번 (BP_AFLT_PDT_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_pdt_u002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_pdt_u002_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_U002.xml:10
