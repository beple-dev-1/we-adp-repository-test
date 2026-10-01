# 엔터프라이즈제로페이 영수증 v2 QR/BARCODE 생성 (ent_zero_complete_code_v2)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-HIST-10-S | 엔터프라이즈제로페이 영수증_v2 | HIT-HIST-10-S-e07 |

## 입력

- (없음)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- QR코드 (QR_CODE)
- BAR코드 (BAR_CODE)

## 데이터 처리

### QR발급정보조회 5분내(by QR결제토큰) (TB_QR_MNG_R004)

- 종류: SELECT
- 테이블: TB_QR_MNG
- 입력: 거래일자 (TRX_DT), QR_TOKEN, BAR_TOKEN, ORG_CD

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_complete_code_v2.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_complete_code_v2_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R004.xml:10
