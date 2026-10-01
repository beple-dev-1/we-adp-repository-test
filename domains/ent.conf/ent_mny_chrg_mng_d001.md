# 엔터프라이즈 충전수단 삭제 action (ent_mny_chrg_mng_d001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-CONF-10-S | 엔터프라이즈 주 충전수단 조회 화면 | 화면 |

## 입력

- 거래번호 (SEQ)
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)

## 출력

- (없음)

## 데이터 처리

### 계좌상세조회(BY KEY) (TB_ACCOUNT_R002)

- 종류: SELECT
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 거래번호 (SEQ)

### 계좌조회(하이브리드 조인) (TB_ACCOUNT_R022)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_ACCOUNT_HB
- 입력: 거래번호 (SEQ), 회원코드 (MEMB_CD)

### 하이브리드 계좌 삭제 (TB_ACCOUNT_HB_D001)

- 종류: DELETE
- 테이블: TB_ACCOUNT_HB
- 입력: 회원코드 (MEMB_CD), 거래번호 (SEQ)

### 계좌삭제(BY KEY) (TB_ACCOUNT_D001)

- 종류: DELETE
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 거래번호 (SEQ)

### 주계좌설정(최근등록계좌) (TB_ACCOUNT_U003)

- 종류: UPDATE
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 회원코드 (MEMB_CD)

### 계좌목록조회 (TB_ACCOUNT_R001)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

### 주 결제 카드정보 조회 (by memb_cd) (TB_CARD_R001)

- 종류: SELECT
- 테이블: TB_CARD
- 입력: 회원코드 (MEMB_CD)

### 주 결제 카드정보 수정(SEQ) (TB_CARD_U001)

- 종류: UPDATE
- 테이블: TB_CARD
- 입력: MAIN_CARD_YN, 회원코드 (MEMB_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- 메시지: 선택하신 계좌가 존재하지 않습니다.
  - 조건: DomainUtil.getResultCount(idoOutAR002) == 0 (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_d001_act.jsp:70)
- 메시지: 선택하신 계좌정보가 일치하지 않습니다.
  - 조건: !idoOutAR002.getString("BANK_CD").equals(input.getString("BANK_CD")) || !idoOutAR002.getString("MASK_ACCT_NO").equals(input.getString("ACCT_NO")) (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_d001_act.jsp:74)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_mny_chrg_mng_d001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_d001_act.jsp:30
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R022.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_U001.xml:10
