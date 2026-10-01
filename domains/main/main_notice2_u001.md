# 알림 조회여부 업데이트 (main_notice2_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-COMN-20-20-S | 알림함 | 화면 |
| HIT-COMN-20-10-S | 엔터프라이즈 - 알림함 | 화면 |

## 입력

- TRX_DT
- TRX_SEQ

## 출력

- (없음)

## 데이터 처리

### 알림 조회여부 업데이트 (TB_PUSH_MSG_U003)

- 종류: UPDATE
- 테이블: TB_PUSH_MSG
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_notice2_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/main_notice2_u001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PUSH_MSG_U003.xml:10
