# 현재_공지사항_관리_수정 (ent_noti_mng_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MLPC-30-S | 공지사항 관리 | 화면 |

## 입력

- NOTI_ENT
- NOTI_STR_DT
- 제목 (TITLE)
- 내용 (CTNT)
- 공지여부 (NOTI_YN)
- 거래번호 (SEQ)
- 앱코드 (APP_CD)

## 출력

- 코드 (CODE)
- MSG

## 데이터 처리

### 공지사항_관리_정보수정 (ADM_TB_NOTICE_MNG_U002)

- 종류: UPDATE
- 테이블: TB_NOTICE_MNG
- 입력: NOTI_ENT, NOTI_STR_DT, 제목 (TITLE), 내용 (CTNT), 공지여부 (NOTI_YN), 거래번호 (SEQ), 앱코드 (APP_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_noti_mng_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_noti_mng_u001_act.jsp:22
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.ADM_TB_NOTICE_MNG_U002.xml:10
