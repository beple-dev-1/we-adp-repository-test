# 엔터프라이즈 주 충전수단 설정 변경 action (ent_mny_chrg_mng_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-CONF-10-S | 엔터프라이즈 주 충전수단 조회 화면 | HIT-CONF-10-S-e13, HIT-CONF-10-S-e14 |

## 입력

- 거래번호 (SEQ)
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- MTHD_GUBUN
- 배치키 (BATCH_KEY)

## 출력

- (없음)

## 데이터 처리

### 계좌상세조회(BY KEY) (TB_ACCOUNT_R002)

- 종류: SELECT
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 거래번호 (SEQ)

### 주계좌설정해지 (TB_ACCOUNT_U002)

- 종류: UPDATE
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD)

### 주계좌설정(특정계좌) (TB_ACCOUNT_U001)

- 종류: UPDATE
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), SEQ

### 주 결제 카드정보 수정 (TB_CARD_U002)

- 종류: UPDATE
- 테이블: TB_CARD
- 입력: MAIN_CARD_YN, 회원코드 (MEMB_CD), DYNAMIC_0

### 카드 원장 조회 (MEMB_CD, BATCH_KEY) (TB_CARD_R006)

- 종류: SELECT
- 테이블: TB_CARD
- 입력: 회원코드 (MEMB_CD), BATCH_KEY

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- 메시지: 선택하신 계좌가 존재하지 않습니다.
  - 조건: DomainUtil.getResultCount(idoOutAR002) == 0 (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_u001_act.jsp:69)
- 메시지: 선택하신 계좌정보가 일치하지 않습니다.
  - 조건: !idoOutAR002.getString("BANK_CD").equals(input.getString("BANK_CD")) || !idoOutAR002.getString("MASK_ACCT_NO").equals(input.getString("ACCT_NO")) (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_u001_act.jsp:73)
- 메시지: 선택하신 카드가 존재하지 않습니다.
  - 조건: DomainUtil.getResultCount(idoOutAR002) == 0 (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_u001_act.jsp:151)
- 메시지: 선택하신 카드정보 일치하지 않습니다.
  - 조건: !idoOutAR002.getString("BATCH_KEY").equals(input.getString("BATCH_KEY")) (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_u001_act.jsp:155)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_mny_chrg_mng_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_u001_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_U002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R006.xml:10
