# 결제수단 정보 적재 (ent_payment_mng_c001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-CONF-10-10-S | 설정 > 결제수단 설정 | 화면 |

## 입력

- CPX_PAY_MTHD

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 엔터프라이즈 결제수단관리 회원추가 (TB_MEMBER_ENT_PAY_MNG_C001)

- 종류: INSERT
- 테이블: TB_MEMBER_ENT_PAY_MNG
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), CPX_PAY_MTHD

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_payment_mng_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_payment_mng_c001_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_PAY_MNG_C001.xml:10
