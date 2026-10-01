# 비플오더 가맹점 관리에 신청 가맹점 노출 (smt_odr_main)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-10-10-S | 배송지 등록(로케이션) | 화면 |
| BPG-OFFD-10-30-S | 오피스푸드(식사배송) 장바구니 | 화면 |
| BPG-OFFD-10-S | 오피스푸드 메인 | BPG-OFFD-10-S-e07 |
| BPG-ORDR-10-10-10-S | 결제완료 | BPG-ORDR-10-10-10-S-e04 |
| BPY-PAY-10-S | 식권제로페이 결제방식선택 | BPY-PAY-10-S-e04 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)

## 출력

- DELIV_YN
- SMT_ODR_LOC_AGR_YN
- SMT_ODR_LOC_AGR_DTTM
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 배송지역등록 여부 (MEMB_DELIV_CNT)

## 데이터 처리

### 위치정보 수집 및 이용 동의 여부 조회 (TB_MEMBER_APP_R010)

- 종류: SELECT
- 테이블: TB_MEMBER_APP, TB_BP_AFLT_CORP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_main.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_main_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R010.xml:10
