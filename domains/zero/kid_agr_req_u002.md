# 만 14세미만 위치 동의 업데이트 (kid_agr_req_u002)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-KID-20-S | 만 14세미만 회원가입 & 가맹점 찾기 서비스 이용시 진입 화면 | 화면 |

## 입력

- LOC_AGR_YN
- 회원코드 (MEMB_CD)

## 출력

- (없음)

## 데이터 처리

### 만 14세미만 위치 동의 업데이트 (TB_KID_AGR_REQ_U002)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: LOC_AGR_YN, LOC_AGR_DT, 회원코드 (MEMB_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.kid_agr_req_u002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/kid_agr_req_u002_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KID_AGR_REQ_U002.xml:10
