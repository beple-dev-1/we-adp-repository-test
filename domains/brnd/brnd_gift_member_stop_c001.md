# 엔터프라이즈 - 휴대폰 본인인증 요청 (brnd_gift_member_stop_c001)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-BRND-20-S | 브랜드상품권 회원 서비스 중지 | 화면 |

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

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_member_stop_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_member_stop_c001_act.jsp:41
