# 현재 공지사항 관리 상태변경 (ent_noti_mng_u002)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MLPC-30-S | 공지사항 관리 | 화면 |

## 입력

- 거래번호 (SEQ)
- 공지여부 (NOTI_YN)
- 앱코드 (APP_CD)

## 출력

- 코드 (CODE)
- MSG

## 데이터 처리

### 현대_공지사항관리_상태변경 (TB_NOTICE_MNG_ENT_U002)

- 종류: UPDATE
- 테이블: TB_NOTICE_MNG
- 입력: 공지여부 (NOTI_YN), 앱코드 (APP_CD), 거래번호 (SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_noti_mng_u002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_noti_mng_u002_act.jsp:22
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_ENT_U002.xml:10
