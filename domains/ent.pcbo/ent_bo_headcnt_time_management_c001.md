# 식수시간관리등록 (ent_bo_headcnt_time_management_c001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MLPC-10-20-S | 식수시간관리 | 화면 |

## 입력

- ENT_HEADCNT_MAIN_DATA

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 식수신청 시간관리 등록/수정 (TB_ENT_HEADCNT_ABLE_TM_C001)

- 종류: INSERT
- 테이블: TB_ENT_HEADCNT_ABLE_TM, UPSERT
- 입력: STD_TM, END_TM, SITE_CD, SITE_CD, STD_TM, END_TM

## 실패

- 메시지: DB처리중 오류가 발생하였습니다.
  - 조건: DomainUtil.isError(idoTbEntHeadcntAbleTmOutC001) (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_bo_headcnt_time_management_c001_act.jsp:67)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_bo_headcnt_time_management_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_bo_headcnt_time_management_c001_act.jsp:30
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_ABLE_TM_C001.xml:10
