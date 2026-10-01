# 식권제로페이 토큰 발급 (zero_multi_info_r003)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-PAY-20-10-S | 제로페이 결제 메인 > 계좌 상세 | 화면 |

## 입력

- 회원명 (MEMB_NM)
- 휴대폰번호 (MOB_NO)
- FLAG
- 이용기관ID (ORG_ID)
- 카드번호 (CARD_NO)
- 한도일련번호 (LMT_SEQ)
- CLS_DSP_SEQ

## 출력

- REQ_HEADER
- REQ_DATA
- REQ_URL

## 데이터 처리

- (IDO 호출 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_multi_info_r003.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_multi_info_r003_act.jsp:27
