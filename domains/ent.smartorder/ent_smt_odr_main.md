# 스마트오더 메인 (ent_smt_odr_main)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-10-10-S | 배송지 등록(로케이션) | 화면 |
| BPG-OFFD-10-30-S | 오피스푸드(식사배송) 장바구니 | 화면 |
| BPG-OFFD-10-S | 오피스푸드 메인 | BPG-OFFD-10-S-e07 |
| HIT-ORDR-10-S | 비플오더 가맹점 관리에 신청 가맹점 노출 | 화면 |
| HIT-ORDR-16-S | 장바구니 조회 | HIT-ORDR-16-S-e08 |
| HIT-ORDR-22-20-S | 스마트오더 결제완료 | HIT-ORDR-22-20-S-e04 |
| HIT-ORDR-22-30-S | 스마트오더 결제완료(로봇배송 포함) | 화면 |
| HIT-ORDR-28-10-S | 스마트오더 매장 메뉴 | HIT-ORDR-28-10-S-e07 |
| HIT-ORDR-58-S | 가맹점 상세 기본정보 | HIT-ORDR-58-S-e09 |
| HIT-PAY-10-S | 엔터프라이즈_비플식권 혼자/함께결제 선택 | HIT-PAY-10-S-e04 |

## 입력

- 채널구분 (CHNL_TP)

## 출력

- 근무지코드 (WORK_CD)
- 배송지코드 (DELV_SEQ)
- 응답코드 (RES_CD)
- 응답메세지 (RES_MSG)
- 비플가맹점순번 (BP_AFLT_SEQ)
- DELI_OWNR_TP
- 원 근무지 코드 (ORG_WORK_CD)

## 데이터 처리

### 스마트오더 메인 조회 (TB_MEMBER_ENT_APP_R003)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_CAFETERIA_WORK_PLCE, TB_MEMBER_ENT_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_main.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_main_act.jsp:14
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R003.xml:10
