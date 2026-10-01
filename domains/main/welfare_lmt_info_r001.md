# 복지포인트 이용내역 조회 (welfare_lmt_info_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-WELF-40-S | 복지포인트 이용정보 조회 | 화면 |

## 입력

- START_DT
- END_DT
- CTGRY
- ACCT_NO
- CLS_DSP_SEQ
- LMT_SEQ
- 이용기관구분 (ORG_TP)
- 이용기관ID (ORG_ID)
- 카드번호 (CARD_NO)
- 페이지번호 (PAGE_NO)
- 요청건수 (REQ_CNT)

## 출력

- REC
- 추가데이터여부 (MORE_YN)

## 데이터 처리

### 복지포인트 결제내역 조회 (TB_ZEROPAY_TRAN_R034)

- 종류: SELECT
- 테이블: TB_ZEROPAY_COMPLEX_TRAN, TB_ZEROPAY_TRAN, TB_AFFILIATION_MNG, TB_ZEROPAY_MT_ODR, TB_ZEROPAY_BPPG_COMPLEX_TRAN, TB_ZEROPAY_BPPG_TRAN, TB_TRAN, TB_STORE_MNG, TB_WLFE_POINT_TRANS_HIST
- 입력: 시작일자 (START_DT), 종료일자 (END_DT), 앱코드 (APP_CD), 계좌번호 (ACCT_NO), CLS_DSP_SEQ, 한도일련번호 (LMT_SEQ), 회원코드 (MEMB_CD), 시작일자 (START_DT), 종료일자 (END_DT), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 계좌번호 (ACCT_NO), CLS_DSP_SEQ, 한도일련번호 (LMT_SEQ), 시작일자 (START_DT), 종료일자 (END_DT), 앱코드 (APP_CD), 계좌번호 (ACCT_NO), CLS_DSP_SEQ, 한도일련번호 (LMT_SEQ), 회원코드 (MEMB_CD), 이용기관구분 (ORG_TP), 이용기관ID (ORG_ID), 카드번호 (CARD_NO), DYNAMIC_0, FROMCNT, TOCNT

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.welfare_lmt_info_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/welfare_lmt_info_r001_act.jsp:34
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R034.xml:10
