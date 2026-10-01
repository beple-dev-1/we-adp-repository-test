# 비플오더 메뉴관리 원산지 수정 (bo_my_orgin_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-40-10-S | 비플오더 메뉴관리 원산지 수정 | BPG-OBO-40-10-S-e05 |
| BPG-OBO-40-S | 비플오더 원산지 | 화면 |

## 입력

- ORIGIN_INFO
- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- (없음)

## 데이터 처리

### 비플오더 메뉴관리 원산지 수정 (TB_BP_AFLT_MY_U005)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MY
- 입력: ORIGIN_INFO, 비플가맹점순번 (BP_AFLT_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_orgin_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_orgin_u001_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_U005.xml:10
