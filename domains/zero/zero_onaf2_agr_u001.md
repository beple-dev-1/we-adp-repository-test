# 비대면결제 약관동의 변경 (zero_onaf2_agr_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-30-20-S | 비대면결제 약관동의 | BPY-ONAF-30-20-S-e14 |

## 입력

- ONAF_AGR_YN
- 앱코드 (APP_CD)
- 회원코드 (MEMB_CD)

## 출력

- (없음)

## 데이터 처리

### 비대면결제 약관동의상태 변경 (TB_MEMBER_APP_U004)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: ONAF_AGR_YN, 앱코드 (APP_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf2_agr_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf2_agr_u001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U004.xml:10
