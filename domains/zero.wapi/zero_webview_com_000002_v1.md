# 웹뷰 API - 휴대폰 본인인증 확인(통합웹뷰버전) (zero_webview_com_000002_v1)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-30-30-S | 재설정 | 화면 |

## 입력

- 이용기관ID (ORG_ID)
- 요청부 (DATA)
- 휴대폰번호 (MOB_NO)
- 거래일련번호 (TRX_SEQ)
- 인증번호 (APRV_NO)
- 회원명 (MEMB_NM)
- 통신사 (TELE_CORP)
- 푸시ID (PUSH_ID)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 응답부 (DATA)

## 데이터 처리

### NON_CI 사용자 가입여부 조회 (TB_MEMBER_NON_CI_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI
- 입력: 앱코드 (APP_CD), UUID, UUID_TYPE

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_com_000002_v1.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_com_000002_v1_act.jsp:32
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10

## 목록 밖 — 보호 화면

이 화면들은 사람 손질로 md 를 바이트 그대로 둬 업무 절이 없다: EXW-UWV-70-30-50-C
