# 요기요_주소관리 (bp_ygyo_addr)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-YGYO-30-S | 요기요_메인화면 | 화면 |

## 입력

- (없음)

## 출력

- (없음)

## 데이터 처리

### 요기요_배송주소조회 (TB_MEMBER_APP_YGYO_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_APP_YGYO
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_addr.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_addr_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_R001.xml:10
