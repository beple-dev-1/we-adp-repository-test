# 가맹점 찾기 리뷰목록 조회 action (ent_aflt_srch_review_list_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-SRCH-10-10-S | 가맹점 찾기 리뷰목록 조회 | 화면 |

## 입력

- AFLT_MST_SEQ
- LIMIT_CNT
- REQUEST_OFFSET

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 총건수 (TOTAL_CNT)
- REC

## 데이터 처리

### 가맹점 찾기 리뷰목록 조회 (10개씩) (TB_AFFILIATION_REVIEW_MNG_R002)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_AFFILIATION_REVIEW_MNG
- 입력: AFLT_MST_SEQ, 회원코드 (MEMB_CD), AFLT_MST_SEQ, 회원코드 (MEMB_CD), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_srch_review_list_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/srch/ent_aflt_srch_review_list_r001_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_REVIEW_MNG_R002.xml:10
