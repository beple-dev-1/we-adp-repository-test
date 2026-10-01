# 거래승인번호검증(v2) (zero_bppg_v2_pwd_confirm_r001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-PGM-20-10-S | 거래승인번호검증(v2) | 화면 |

## 입력

- MEMB_NM
- MOB_NO
- TRX_PWD
- MEMB_CI
- 앱코드 (APP_CD)

## 출력

- 회원상태 (MEMB_ST)
- FAIL_CNT
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- CALLBACK_PARAM_REC

## 데이터 처리

### 회원정보 조회(BY CI) (TB_MEMBER_R002)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), CI

### 회원정보조회(MOB_NO, MEMB_NM, APP_CD) (TB_MEMBER_R031)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 휴대폰번호 (MOB_NO), 회원명 (MEMB_NM)

### 비밀번호 오류횟수 업데이트 (TB_MEMBER_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: PWD_FAIL_CNT, TRX_PWD_FAIL_CNT, PWD_TOKEN, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_bppg_v2_pwd_confirm_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/bppg/zero_bppg_v2_pwd_confirm_r001_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R031.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U001.xml:10
