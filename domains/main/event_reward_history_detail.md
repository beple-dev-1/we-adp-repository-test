# 비플머니 적립내역 상세 (event_reward_history_detail)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-EVNT-10-10-S | 이벤트 참여를 통해 적립받은 비플머니에 대한 적립 내역을 노출 | 화면 |

## 입력

- 거래번호 (TRX_SEQ)
- 거래일자 (TRX_DT)
- 포인트상태명 (REWARD_ST_NM)

## 출력

- MNY_AMT
- 잔액 (BLC_AMT)
- 리워드 적립이유 (REWARD_REASON_TXT)
- 만료일 (EXP_DTTM)
- REG_DTTM
- UPD_DTTM
- 취소일시 (CANCEL_DTTM)
- 포인트상태명 (REWARD_ST_NM)

## 데이터 처리

### 비플 혜택 내역 상세 (TB_MNY_REWARD_TRAN_R005)

- 종류: SELECT
- 테이블: TB_MNY_REWARD_TRAN, TB_MEMBER_MNY
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.event_reward_history_detail.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/event_reward_history_detail_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_REWARD_TRAN_R005.xml:10
