# 브랜드상품권 선물하기 (brnd_gift_send_c001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-BRND-40-S | 브랜드상품권 보유상품권 선물하기 | BPY-BRND-40-S-e10 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- 수신자번호 (RECV_NO)
- RECV_USER_NM
- 메시지 (MSG)
- 브랜드상품권 번호 (BGC_NO)
- SEND_USER_NM
- ORDER_ID
- 권종 코드 (KIND_CODE)

## 출력

- 코드 (CODE)
- 메시지 (MSG)
- GIFT_SRNO
- SEND_USER_NM
- GIFT_EXPIRE_DATE
- IMG_URL
- 제목 (TITLE)
- 선물 메세지 (GIFT_MSG)
- BTN_LIST
- APP_PARAM
- TXT

## 데이터 처리

### 알림 템플릿 조회 (TB_ALARM_INFO_R001)

- 종류: SELECT
- 테이블: TB_ALARM_INFO
- 입력: ALARM_CTGR_TYPE_CD, ALARM_TYPE_CD, ALARM_TMPL_CD

### 브랜드상품권 거래원장 조회(다이나믹) (TB_BRND_TRAN_R001)

- 종류: SELECT
- 테이블: TB_BRND_TRAN
- 입력: DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_send_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_send_c001_act.jsp:41
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_TRAN_R001.xml:10
