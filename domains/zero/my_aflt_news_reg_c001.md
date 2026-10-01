# 마이가맹점 소식관리 등록 (my_aflt_news_reg_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-MYAF-30-10-S | tb_affiliation_my_news_info 등록 | 화면 |

## 입력

- 가맹점ID (AFLT_ID)
- NEWS_TITLE
- NEWS_CONTENT
- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- (없음)

## 데이터 처리

### 마이 가맹점 조회3 (by BP_AFLT_SEQ) (TB_AFFILIATION_MY_R012)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY, TB_BP_AFLT_MNG
- 입력: 앱코드 (APP_CD), 가맹점ID (AFLT_ID), 가맹점ID (AFLT_ID)

### 마이가맹점 소식관리 등록 (TB_AFFILIATION_MY_NEWS_INFO_C001)

- 종류: INSERT
- 테이블: TB_AFFILIATION_MY_NEWS_INFO
- 입력: 앱코드 (APP_CD), 가맹점ID (AFLT_ID), NEWS_TITLE, NEWS_CONTENT, REG_MEMB_CD, 비플가맹점순번 (BP_AFLT_SEQ)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_news_reg_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_news_reg_c001_act.jsp:14
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R012.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_NEWS_INFO_C001.xml:10
