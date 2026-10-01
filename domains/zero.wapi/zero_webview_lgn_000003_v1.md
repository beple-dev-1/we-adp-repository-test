# 웹뷰 API - 휴대폰 본인인증 요청(통합웹뷰버전) (zero_webview_lgn_000003_v1)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-10-S | 회원가입 | 화면 |
| EXW-UWV-30-30-S | 재설정 | 화면 |

## 입력

- 이용기관ID (ORG_ID)
- 요청부 (DATA)
- 휴대폰번호 (MOB_NO)
- 회원명 (MEMB_NM)
- 생년월일 (BRT_DT)
- 성별 (GNDR)
- 내외국인구분 (IN_FRN_TP)
- 통신사 (TELE_CORP)
- 재전송여부 (RE_SEND_YN)
- 거래일련번호 (TRX_SEQ)
- 주민번호뒷자리 (REGS_NO)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 거래일련번호 (TRX_SEQ)
- 휴대폰번호 (MOB_NO)
- 회원명 (MEMB_NM)
- 생년월일 (BRT_DT)
- 성별 (GNDR)
- 내외국인구분 (IN_FRN_TP)
- 통신사 (TELE_CORP)
- 재전송여부 (RE_SEND_YN)
- 주민번호뒷자리 (REGS_NO)

## 데이터 처리

- (IDO 호출 없음)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_lgn_000003_v1.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_lgn_000003_v1_act.jsp:32

## 목록 밖 — 보호 화면

이 화면들은 사람 손질로 md 를 바이트 그대로 둬 업무 절이 없다: EXW-UWV-70-30-10-C, EXW-UWV-70-30-50-C
