# MPM 모바일상품권 결제요청 (zero_one_onaf_approve_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-70-S | 통합 비대면결제 결제 과정 | 화면 |

## 입력

- QR_CODE
- COMPANY_ID
- ZPP_ID
- AMT
- MEMO
- USER_INFO_MASK_YN
- CSBC_ADD_YN
- TYPE_CD
- BOX_TRX_DT
- BOX_TRX_SEQ

## 출력

- RSPS_CD
- RSPS_MSG
- AFLT_NM
- AMT
- CSBC_YN
- CSBC_AMT
- CSBC_TYPE
- ORDER_ID

## 데이터 처리

### 가맹점정보 조회 (TB_AFFILIATION_MNG_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_MY
- 입력: 가맹점ID (AFLT_ID)

### 제로페이 가맹점QR정보 조회 (TB_AFFILIATION_QR_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_QR
- 입력: AFLT_ID, QR_CODE

### 상품권 비대면 결제 내역 등록 (TB_ZEROPAY_GIFT_ONAF_TRAN_C001)

- 종류: INSERT
- 테이블: TB_ZEROPAY_GIFT_ONAF_TRAN
- 입력: COMPANY_ID, 가맹점명 (AFLT_NM), ORDER_ID, MCH_SEND_UNIQ_NO, 결제금액 (AMT), 거래일자 (TRX_DT), 거래시간 (TRX_TM), 응답코드 (RSPS_CD), 응답메세지 (RSPS_MSG), 회원코드 (MEMB_CD), 앱코드 (APP_CD), TYPE_CD, 가맹점ID (AFLT_ID), 브랜드상품권ID (BGC_ID), BGC_NM, 메모 (MEMO)

### BOX POS 거래내역 원장 업데이트 (TB_ZEROPAY_BOXPOS_TRAN_U001)

- 종류: UPDATE
- 테이블: TB_ZEROPAY_BOXPOS_TRAN
- 입력: ZERO_TRX_SEQ, ZERO_TRX_DT, ORDER_ID, 거래번호 (TRX_SEQ), 거래일자 (TRX_DT)

### 알림 템플릿 조회 (TB_ALARM_INFO_R001)

- 종류: SELECT
- 테이블: TB_ALARM_INFO
- 입력: ALARM_CTGR_TYPE_CD, ALARM_TYPE_CD, ALARM_TMPL_CD

### 마이가맹점 정보 조회(DYNAMIC) (TB_AFFILIATION_MY_R007)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP
- 입력: DYNAMIC_0

### 마이가맹점 알림대상 상세원장 조회(DYNAMIC) (TB_AFFILIATION_MY_DETAIL_R002)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP, TB_AFFILIATION_MY
- 입력: DYNAMIC_0

### PUSH 내역 등록 (TB_PUSH_MSG_C001)

- 종류: INSERT
- 테이블: TB_PUSH_MSG
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 회원코드 (MEMB_CD), 휴대폰번호 (MOB_NO), 거래구분 (TRX_TP), 제목 (TITLE), 메시지 (MSG), 내용 (CTNT), WRK_ID, SNDR_CD, USER_ID, 제어코드 (CTRL_CD), GRP_ID, COMP_ID, COMP_MSG_ID, RE_TRX_YN, RMK, 앱코드 (APP_CD), 응답코드 (RSPS_CD), 응답메세지 (RSPS_MSG), 처리상태 (PROC_ST), LIST_CTNT, ALARM_CTGR_TYPE_CD, ALARM_TYPE_CD, ALARM_TMPL_CD, 가맹점ID (AFLT_ID), NOTI_EVNT_DTL

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_one_onaf_approve_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_one_onaf_approve_c001_act.jsp:41
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_QR_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_GIFT_ONAF_TRAN_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BOXPOS_TRAN_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PUSH_MSG_C001.xml:10
