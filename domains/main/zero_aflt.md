# 가맹점관리 (zero_aflt)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-AFMG-10-S | 가맹점 인증 | MCH-AFMG-10-S-e09 |

## 입력

- (없음)

## 출력

- MNG_YN
- SF_YN

## 데이터 처리

- (IDO 호출 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_aflt.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_aflt_act.jsp:22
