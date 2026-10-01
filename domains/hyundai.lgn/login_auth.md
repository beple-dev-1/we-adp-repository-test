# 현대_대량구매서비스_로그인_인증정보 검증 (login_auth)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-COMN-40-20-S | 현대모비스 callback url | 화면 |

## 입력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### SSO 인증 이력 조회 (ADM_TB_ENT_SSO_HIST_R001)

- 종류: SELECT
- 테이블: TB_ENT_SSO_HIST
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 현대_대량구매서비스_신청관리조회 (ADM_TB_HD_APPLY_MNG_R003)

- 종류: SELECT
- 테이블: TB_HD_APPLY_MNG
- 입력: APPLY_ID

### SSO 인증 정보 사용상태 변경 (ADM_TB_ENT_SSO_HIST_U001)

- 종류: UPDATE
- 테이블: TB_ENT_SSO_HIST
- 입력: USE_YN, 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 현대_대량구매서비스_사용자정보 등록 (ADM_TB_HD_APPLY_USER_C001)

- 종류: INSERT
- 테이블: TB_HD_APPLY_USER
- 입력: APPLY_ID, EMPL_NO, SESSION_ID, REG_DTTM, UPD_DTTM

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.login_auth.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/hyundai/lgn/login_auth_act.jsp:30
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.ADM_TB_ENT_SSO_HIST_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.ADM_TB_HD_APPLY_MNG_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.ADM_TB_ENT_SSO_HIST_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.ADM_TB_HD_APPLY_USER_C001.xml:10
