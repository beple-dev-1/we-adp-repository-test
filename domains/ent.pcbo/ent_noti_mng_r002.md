# 공지사항 관리 상세조회 (ent_noti_mng_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MLPC-30-S | 공지사항 관리 | 화면 |

## 입력

- 거래번호 (SEQ)

## 출력

- MSG
- 코드 (CODE)
- REC

## 데이터 처리

### 현대_공지사항관리_상세 (TB_NOTICE_MNG_ENT_R002)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_NOTICE_MNG
- 입력: 앱코드 (APP_CD), 거래번호 (SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_noti_mng_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_noti_mng_r002_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_ENT_R002.xml:10
