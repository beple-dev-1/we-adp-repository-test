# 비대면 매장검색 > 업종 조회 (zero_onaf2_list_r003)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-30-30-S | 비대면결제 매장검색 | 화면 |

## 입력

- (없음)

## 출력

- REC

## 데이터 처리

### 업종 조회 (TB_CTGR_CATH_R001)

- 종류: SELECT
- 테이블: TB_CTGR_CATG
- 입력: DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf2_list_r003.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf2_list_r003_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGR_CATH_R001.xml:10
