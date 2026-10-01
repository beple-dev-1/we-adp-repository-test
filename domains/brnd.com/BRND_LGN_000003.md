# 브랜드상품권 웹뷰 API - 본인인증 요청 (BRND_LGN_000003)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-80-10-S | 브랜드상품권 웹뷰 API - 휴면계정해제 본인인증 | EXW-BRWV-80-10-S-e13 |
| EXW-BRWV-80-30-10-S | 브랜드상품권 웹뷰 API 회원가입 | 화면 |

## 입력

- 휴대폰번호 (MOB_NO)
- 회원명 (MEMB_NM)
- 생년월일 (BRT_DT)
- 성별 (GNDR)
- 내외국인구분 (IN_FRN_TP)
- 통신사 (TELE_CORP)
- 재전송여부 (RE_SEND_YN)
- 거래번호 (TRX_SEQ)
- 주민번호 (REGS_NO)
- BRT_GNDR
- 앱코드 (APP_CD)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 거래번호 (TRX_SEQ)
- 휴대폰번호 (MOB_NO)
- 회원명 (MEMB_NM)
- 생년월일 (BRT_DT)
- 성별 (GNDR)
- 내외국인구분 (IN_FRN_TP)
- 통신사 (TELE_CORP)
- 재전송여부 (RE_SEND_YN)
- 주민번호 (REGS_NO)

## 데이터 처리

- (IDO 호출 없음)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_LGN_000003.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_LGN_000003_act.jsp:29
