# 가맹점 소식 수정 action (my_aflt_news_upd_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-MYAF-30-20-S | tb_affiliation_my_news_info 수정 | 화면 |

## 입력

- NEWS_TITLE
- NEWS_CONTENT
- UPD_MEMB_CD
- OPEN_YN
- 앱코드 (APP_CD)
- 가맹점ID (AFLT_ID)
- REG_DTTM

## 출력

- (없음)

## 데이터 처리

### 마이가맹점 소식관리 수정 (TB_AFFILIATION_MY_NEWS_INFO_U001)

- 종류: UPDATE
- 테이블: TB_AFFILIATION_MY_NEWS_INFO
- 입력: NEWS_TITLE, NEWS_CONTENT, UPD_MEMB_CD, OPEN_YN, 앱코드 (APP_CD), 가맹점ID (AFLT_ID), REG_DTTM

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_news_upd_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_news_upd_u001_act.jsp:15
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_NEWS_INFO_U001.xml:10
