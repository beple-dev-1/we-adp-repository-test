# 비플오더가입완료 (bo_my_chk4)

- 처리: 쓰기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-70-S | 비플오더 가입 3/3 — 주문 서비스 기본 설정 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- (없음)

## 데이터 처리

### 비플오더가입완료 상태 수정 (TB_BP_AFLT_MY_U002)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MY
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_chk4.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_chk4_act.jsp:21
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_U002.xml:10
