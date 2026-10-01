# 공지사항 관리 리스트조회 (ent_noti_mng_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MLPC-30-S | 공지사항 관리 | 화면 |

## 입력

- PAGE_SIZE
- DATE_SET
- FILTER_TYPE_CHECK
- FILTER_STATE_CHECK
- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- PAGE_NUM
- FILTER_DATE_END
- FILTER_DATE_START
- SEARCH_WORD
- NOTI_TYPE

## 출력

- 코드 (CODE)
- MSG
- REC

## 데이터 처리

### 현대_공지사항관리 리스트 조회 (TB_NOTICE_MNG_ENT_R001)

- 종류: SELECT
- 테이블: TB_ADM_USER, TB_MEMBER, TB_NOTICE_MNG
- 입력: 앱코드 (APP_CD), DYNAMIC_0, 앱코드 (APP_CD), DYNAMIC_1, PAGE_NUM

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_noti_mng_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_noti_mng_r001_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_ENT_R001.xml:10
