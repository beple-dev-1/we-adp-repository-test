# 스탬프 확인하기 (knb_stamp_chk)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-COMN-20-10-S | 알림 | 화면 |
| BPY-COMN-20-30-S | 공지사항 목록 | 화면 |

## 입력

- (없음)

## 출력

- 총건수 (TOTAL_CNT)

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.knb_stamp_chk.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/knb_stamp_chk_act.jsp:20
