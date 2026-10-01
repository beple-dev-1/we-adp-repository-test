# 브랜드상품권 웹뷰 API 로그인 (BRND_LGN_000001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-80-10-S | 브랜드상품권 웹뷰 API - 휴면계정해제 본인인증 | 화면 |
| EXW-BRWV-80-30-10-S | 브랜드상품권 웹뷰 API 회원가입 | 화면 |
| EXW-BRWV-80-S | 브랜드상품권 웹뷰 게이트웨이 | 화면 |
| EXW-BRWV-90-S | 브랜드상품권 웹뷰 게이트웨이 v2 | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- ORG_CD
- ORG_APP_CD
- API_KEY
- NMA_DEV_ID
- NMA_MODEL
- NMA_NETNM
- NMA_PLF
- NMA_PLF_VER

## 출력

- 코드 (CODE)
- MSG
- 거래승인번호 등록 여부 (TRX_PWD_REG_YN)
- 개인계좌등록여부 (PERS_REG_YN)
- TOKEN

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 계좌목록조회 (TB_ACCOUNT_R001)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

### 제로페이 허브 거래등록 (TB_HUB_TRAN_C001)

- 종류: INSERT
- 테이블: TB_HUB_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 업무코드 (BIZ_CD), 거래코드 (TRX_CD), 거래시간 (TRX_TM), 회원코드 (MEMB_CD), REQ_DATA, RES_DATA, RES_CD, 응답메시지 (RES_MSG), 처리상태 (PROC_ST)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_LGN_000001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_LGN_000001_act.jsp:47
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_HUB_TRAN_C001.xml:10
