# 가맹점 소식 삭제 action (my_aflt_news_del_d001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-MYAF-30-20-S | tb_affiliation_my_news_info 수정 | 화면 |
| BPY-MYAF-30-S | tb_affiliation_my_news_info 조회 | 화면 |

## 입력

- 앱코드 (APP_CD)
- 가맹점ID (AFLT_ID)
- REG_DTTM

## 출력

- (없음)

## 데이터 처리

### 마이가맹점 소식관리 삭제 (TB_AFFILIATION_MY_NEWS_INFO_D001)

- 종류: DELETE
- 테이블: TB_AFFILIATION_MY_NEWS_INFO
- 입력: 앱코드 (APP_CD), 가맹점ID (AFLT_ID), REG_DTTM

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_news_del_d001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_news_del_d001_act.jsp:22
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_NEWS_INFO_D001.xml:10
