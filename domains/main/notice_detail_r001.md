# 공지사항 상세(모바일 온누리 결제내역 조회) (notice_detail_r001)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-COMN-20-30-S | 공지사항 목록 | 화면 |

## 입력

- 종료일자 (END_DT)
- 시작일자 (START_DT)

## 출력

- TOT_BUY_AMT
- TOT_REFUND_AMT
- FIRST_BUY_YN
- DATA

## 데이터 처리

- (IDO 호출 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.notice_detail_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/notice_detail_r001_act.jsp:29
