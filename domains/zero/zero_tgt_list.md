# 식권제로페이 함께결제 (zero_tgt_list)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-YGYO-20-10-S | 요기요 결제 | 화면 |

## 입력

- TRX_TP
- CHNL_CD
- REC_INDEX
- CARD_NO
- QR코드 (QR_CODE)
- SMT_ODR_PARAM
- YGYO_RETURN_VALUE_MEAL_PARAM

## 출력

- (없음)

## 데이터 처리

- (IDO 호출 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_tgt_list.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_tgt_list_act.jsp:27
