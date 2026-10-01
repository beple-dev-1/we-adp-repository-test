# 제로페이 결제 메인 > 계좌 상세 > 이용내역 (zero_multi_info_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-PAY-20-10-S | 제로페이 결제 메인 > 계좌 상세 | 화면 |

## 입력

- START_DT
- END_DT
- CTGRY
- ACCT_NO
- CLS_DSP_SEQ
- LMT_SEQ
- 요청건수 (REQ_CNT)
- 페이지번호 (PAGE_NO)

## 출력

- REC
- 추가데이터여부 (MORE_YN)

## 데이터 처리

### 식권제로페이 결제 내역 조회 페이징 (TB_ZEROPAY_MT_ODR_R009)

- 종류: SELECT
- 테이블: TB_ZEROPAY_COMPLEX_TRAN, TB_ZEROPAY_TRAN, TB_AFFILIATION_MNG, TB_ZEROPAY_MT_ODR, TB_ZEROPAY_BPPG_COMPLEX_TRAN, TB_ZEROPAY_BPPG_TRAN, TB_TRAN, TB_BPPAY_COMPLEX_TRAN, TB_CAFETERIA_ODR, TB_CAFETERIA_MENU, TB_BPPAY_TRAN, TB_BP_AFLT_MNG, TB_STORE_MNG, TEMP
- 입력: UNION_GRP_1, 시작일자 (START_DT), 종료일자 (END_DT), 앱코드 (APP_CD), 계좌번호 (ACCT_NO), CLS_DSP_SEQ, 한도일련번호 (LMT_SEQ), 회원코드 (MEMB_CD), UNION_GRP_2, 시작일자 (START_DT), 종료일자 (END_DT), 앱코드 (APP_CD), 계좌번호 (ACCT_NO), CLS_DSP_SEQ, 한도일련번호 (LMT_SEQ), 회원코드 (MEMB_CD), UNION_GRP_3, 시작일자 (START_DT), 종료일자 (END_DT), 앱코드 (APP_CD), 계좌번호 (ACCT_NO), CLS_DSP_SEQ, 한도일련번호 (LMT_SEQ), 회원코드 (MEMB_CD), UNION_GRP_1, 시작일자 (START_DT), 종료일자 (END_DT), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 계좌번호 (ACCT_NO), CLS_DSP_SEQ, 한도일련번호 (LMT_SEQ), UNION_GRP_2, 시작일자 (START_DT), 종료일자 (END_DT), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 계좌번호 (ACCT_NO), CLS_DSP_SEQ, 한도일련번호 (LMT_SEQ), UNION_GRP_3, 시작일자 (START_DT), 종료일자 (END_DT), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 계좌번호 (ACCT_NO), CLS_DSP_SEQ, 한도일련번호 (LMT_SEQ), UNION_GRP_2, 시작일자 (START_DT), 종료일자 (END_DT), 시작일자 (START_DT), 종료일자 (END_DT), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 계좌번호 (ACCT_NO), CLS_DSP_SEQ, 한도일련번호 (LMT_SEQ), UNION_GRP_3, 시작일자 (START_DT), 종료일자 (END_DT), 시작일자 (START_DT), 종료일자 (END_DT), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 계좌번호 (ACCT_NO), CLS_DSP_SEQ, 한도일련번호 (LMT_SEQ), UNION_GRP_2, 시작일자 (START_DT), 종료일자 (END_DT), 회원코드 (MEMB_CD), 앱코드 (APP_CD), CLS_DSP_SEQ, 한도일련번호 (LMT_SEQ), UNION_GRP_3, 시작일자 (START_DT), 종료일자 (END_DT), 회원코드 (MEMB_CD), 앱코드 (APP_CD), CLS_DSP_SEQ, 한도일련번호 (LMT_SEQ), DYNAMIC_0, FROMCNT, TOCNT

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_multi_info_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_multi_info_r001_act.jsp:33
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R009.xml:10
