# 배송지 등록 여부 판단 (smt_odr_main_r006)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-ORDR-30-S | 비플오더 가맹점 관리에 신청 가맹점 노출 | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- 비플가맹점순번 (BP_AFLT_SEQ)
- LOC_ID
- LOC_TITLE
- ADDR1
- ADDR2
- SPOT_DEPTH
- SPOT_ID_1
- SPOT_TITLE_1
- SPOT_ID_2
- SPOT_TITLE_2
- REG_DTTM
- UPD_DTTM
- 위치등록여부 (LOCATION_YN)
- 응답코드 (RES_CD)

## 데이터 처리

### 배송지 등록 여부 판단 (TB_MEMBER_APP_DELIV_R003)

- 종류: SELECT
- 테이블: TB_MEMBER_APP_DELIV
- 입력: 회원코드 (MEMB_CD), 비플가맹점순번 (BP_AFLT_SEQ)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_main_r006.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_main_r006_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_DELIV_R003.xml:10
