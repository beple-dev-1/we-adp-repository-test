# 식수신청정보 변경 (ent_headcnt_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MEAL-20-10-S | 식수 신청내역 상세 | 화면 |

## 입력

- HEADCNT_SEQ
- MANAGER_COMMENT
- 처리상태 (PROC_ST)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 식수신청 상세정보조회 (TB_ENT_HEADCNT_R003)

- 종류: SELECT
- 테이블: TB_ENT_CORP_SITE, TB_ENT_HEADCNT_USER, TB_ENT_HEADCNT, TB_MEMBER, TB_MEMBER_APP
- 입력: HEADCNT_SEQ

### 식수신청관리 상태변경 (TB_ENT_HEADCNT_U001)

- 종류: UPDATE
- 테이블: TB_ENT_HEADCNT
- 입력: 처리상태 (PROC_ST), MANAGER_COMMENT, HEADCNT_SEQ

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- 메시지: DB처리중 오류가 발생하였습니다.
  - 조건: DomainUtil.isError(idoTbEntHeadcntOutC001) (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_headcnt_u001_act.jsp:100)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_headcnt_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_headcnt_u001_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_U001.xml:10
