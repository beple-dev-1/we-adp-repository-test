# 가맹점관리 > 직원등록 (zero_aflt_wrk_reg_c001)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-AFMG-40-20-S | 가맹점관리 > 직원등록 | 화면 |

## 입력

- 가맹점 ID (ZP_COMPANY_ID)
- 직원명 (SF_NM)
- 직원 전화번호 (ST_MDN)
- 메모 (MEMO)

## 출력

- (없음)

## 데이터 처리

- (IDO 호출 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_aflt_wrk_reg_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_aflt_wrk_reg_c001_act.jsp:26
