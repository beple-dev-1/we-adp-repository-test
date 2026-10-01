# 요기요_도착예상시간_툴립제거 (bp_ygyo_orders_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-YGYO-30-S | 요기요_메인화면 | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- YGYO_ORDER_ID

## 출력

- MSG
- 코드 (CODE)

## 데이터 처리

### 요기요_도착예상시간_툴립제거_FLAG수정 (BP_YGYO_ORDERS_BADGE_YN_U001)

- 종류: UPDATE
- 테이블: TB_YGYO_ODR
- 입력: 회원코드 (MEMB_CD), YGYO_ORDER_ID

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_orders_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_orders_u001_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.BP_YGYO_ORDERS_BADGE_YN_U001.xml:10
