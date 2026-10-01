# 가맹점 소식 조회 (my_aflt_news_list_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-MYAF-30-S | tb_affiliation_my_news_info 조회 | 화면 |

## 입력

- 앱코드 (APP_CD)
- 가맹점ID (AFLT_ID)
- PAGE_SIZE
- 페이지 (PAGE)

## 출력

- REC
- 추가데이터여부 (MORE_YN)

## 데이터 처리

### 마이가맹점 소식관리 조회 (TB_AFFILIATION_MY_NEWS_INFO_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY_NEWS_INFO, TB_AFFILIATION_MY, TB_BP_AFLT_MNG
- 입력: 앱코드 (APP_CD), 가맹점ID (AFLT_ID), 가맹점ID (AFLT_ID), PAGE_SIZE, 페이지 (PAGE)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_news_list_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_news_list_r001_act.jsp:14
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_NEWS_INFO_R001.xml:10
