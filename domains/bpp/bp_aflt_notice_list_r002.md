# 공지사항 조회 (bp_aflt_notice_list_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-COMN-40-10-S | 온라인가맹점신청 공지사항 | 화면 |

## 입력

- 거래번호 (SEQ)

## 출력

- 거래번호 (SEQ)
- 앱코드 (APP_CD)
- 공지여부 (NOTI_YN)
- NOTI_STR_DT
- 제목 (TITLE)
- 내용 (CTNT)
- NOTI_ENT
- NOTI_HEAD
- USER_ID
- REG_DTTM
- UPD_DTTM
- CU결제건수 (CU_CNT)
- 멤버가입일자 (MEMB_REG_DTTM)
- EVNT_ID
- END_DT
- TODAY

## 데이터 처리

### 공지사항 조회 (TB_NOTICE_MNG_R002)

- 종류: SELECT
- 테이블: TB_NOTICE_MNG
- 입력: 거래번호 (SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_notice_list_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_notice_list_r002_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_R002.xml:10
