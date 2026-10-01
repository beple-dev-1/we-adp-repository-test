# 공지사항 목록 조회 (bp_aflt_notice_list_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-COMN-40-10-S | 온라인가맹점신청 공지사항 | 화면 |

## 입력

- PAGE_SIZE
- 페이지 (PAGE)

## 출력

- 추가데이터여부 (MORE_YN)
- REC

## 데이터 처리

### 공지사항 목록 조회 (TB_NOTICE_MNG_R001)

- 종류: SELECT
- 테이블: TB_NOTICE_MNG
- 입력: 앱코드 (APP_CD), PAGE_SIZE, 요청건수 (REQ_CNT), DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_notice_list_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_notice_list_r001_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_R001.xml:10
