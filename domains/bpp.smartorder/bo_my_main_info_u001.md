# 비플오더 주문 가맹점 상태 변경 (bo_my_main_info_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-10-20-S | 비플오더 주문서비스 설정 | 화면 |
| BPG-OBO-10-30-10-S | 주문설정(로봇배송) | 화면 |

## 입력

- ODR_YN
- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- CNT

## 데이터 처리

### 비플오더 메뉴 확인여부 (TB_BP_AFLT_MY_PDT_INFO_R006)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY_PDT_INFO
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### 비플오더 영업 임시중지 플래그 변경 (TB_BP_AFLT_MY_U003)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MY
- 입력: ODR_YN, 비플가맹점순번 (BP_AFLT_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_main_info_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_main_info_u001_act.jsp:22
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_U003.xml:10
