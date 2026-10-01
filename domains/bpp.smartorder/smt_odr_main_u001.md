# 제3자 동의여부 update (smt_odr_main_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-ORDR-30-S | 비플오더 가맹점 관리에 신청 가맹점 노출 | 화면 |

## 입력

- SMT_ODR_LOC_AGR_YN
- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 스마트오더 위치기반서비스 동의여부 update (TB_MEMBER_APP_U017)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: SMT_ODR_YN, SMT_ODR_LOC_AGR_YN, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_main_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_main_u001_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U017.xml:10
