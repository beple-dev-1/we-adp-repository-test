# 캐시백 적립 안내 팝업 조회 (zero_one_onaf_approve_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-70-S | 통합 비대면결제 결제 과정 | BPY-ONAF-70-S-e11 |

## 입력

- ZPP_ID

## 출력

- 응답코드 (CODE)
- 응답메시지 (MSG)
- 상품권ID (ZPP_ID)
- 상품권 명 (ZPP_NM)
- 캐시백 상품권 여부 (CSBC_YN)
- 캐시백 적립 여부 (CSBC_ACU_LMT_TYPE)
- 케시백 적립 유형 (CSBC_ACU_TYPE)
- RATE_INFO_REC
- AMT_LIST_REC

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_one_onaf_approve_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_one_onaf_approve_r001_act.jsp:33
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
