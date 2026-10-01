# 매장 상세 지도 정보 조회 (zero_one_onaf_approve_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-40-S | 비대면결제 > 비대면결제과정 | BPY-ONAF-40-S-e11 |
| BPY-ONAF-70-S | 통합 비대면결제 결제 과정 | 화면 |
| BPY-PAY-10-10-S | 법인 제로페이 결제화면 호출 | 화면 |
| BPY-PAY-30-S | 개인제로페이 MPM 결제 | 화면 |

## 입력

- AFLT_ID

## 출력

- LAT
- LNG
- CATE_GROUP_CD
- AFLT_ID
- AFLT_NM
- ADDRS1
- ADDRS2
- REPR_NOS
- REC

## 데이터 처리

### 가맹점 조회 (by AFLT_ID) (TB_AFFILIATION_MNG_R009)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_AFFILIATION_QR, TB_AFFILIATION_MNG, TB_CTGR_CATG_CD, TB_MEMBER_AFLT, TB_AFFILIATION_MY
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 가맹점ID (AFLT_ID)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_one_onaf_approve_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_one_onaf_approve_r002_act.jsp:35
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R009.xml:10
