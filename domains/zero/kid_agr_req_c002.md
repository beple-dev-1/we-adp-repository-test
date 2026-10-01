# 만14세미만 보호자 알림톡 발송 (kid_agr_req_c002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-PGM-30-10-10-S | PG_만 14세미만 회원가입 | 화면 |
| BPY-KID-20-S | 만 14세미만 회원가입 & 가맹점 찾기 서비스 이용시 진입 화면 | 화면 |

## 입력

- 거래번호 (SEQ)
- 거래일자 (TRX_DT)
- 휴대폰번호 (MOB_NO)
- 회원명 (MEMB_NM)
- SVC_TYPE
- REQ_MOB_NO

## 출력

- (없음)

## 데이터 처리

### 알림톡 템플릿 정보 조회 (TB_TALK_TEMPLATE_MNG_R002)

- 종류: SELECT
- 테이블: TB_TALK_TEMPLATE_MNG
- 입력: 템플릿 아이디 (TEMPLATE_ID)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.kid_agr_req_c002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/kid_agr_req_c002_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_TALK_TEMPLATE_MNG_R002.xml:10
