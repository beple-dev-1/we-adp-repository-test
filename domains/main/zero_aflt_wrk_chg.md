# 가맹점관리 > 직원관리 상태상세/변경 (zero_aflt_wrk_chg)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 미확인(액션 JSP 없음(WSVC 만 있음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-AFMG-40-S | 가맹점관리 > 직원관리 > 등록된 가맹점 조회 | 화면 |

## 입력

- 가맹점명 (COMPANY_NM)
- 고객명 (USER_NM)
- 직원 전화번호 (ST_MDN)
- 직원상태 (STATUS)
- 등록일자 (INST_DATE)
- 메모 (MEMO)
- 가맹점 ID (ZP_COMPANY_ID)

## 출력

- 가맹점명 (COMPANY_NM)
- 고객명 (USER_NM)
- 직원 전화번호 (ST_MDN)
- 직원상태 (STATUS)
- 등록일자 (INST_DATE)
- 메모 (MEMO)
- 가맹점 ID (ZP_COMPANY_ID)

## 데이터 처리

- (IDO 호출 없음) — 액션 JSP 없음(WSVC 만 있음)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_aflt_wrk_chg.xml:6
