# 공지사항 목록 (notice_list)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-COMN-20-20-S | 알림함 | 화면 |
| BPY-COMN-20-30-10-S | 공지사항 상세보기 | BPY-COMN-20-30-10-S-e02 |
| BPY-COMN-20-30-S | 공지사항 목록 | 화면 |
| BPY-EVNT-10-S | 비플페이 혜택 메인 페이지 | 화면 |
| BPY-MYAF-50-S | 매니저 인증요청 수락 | 화면 |
| HIT-COMN-20-10-S | 엔터프라이즈 - 알림함 | 화면 |

## 입력

- 제목 (TITLE)
- 거래번호 (SEQ)

## 출력

- (없음)

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.notice_list.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/notice_list_act.jsp:15
