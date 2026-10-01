# 요기요_배너조회 (bp_ygyo_banner)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-YGYO-30-S | 요기요_메인화면 | 화면 |

## 입력

- (없음)

## 출력

- 코드 (CODE)
- MSG
- 배너타입 (BANNER_TYPE)
- BANNER_LIST

## 데이터 처리

### 배너 목록 조회 (TB_BANNER_GRP_MNG_R001)

- 종류: SELECT
- 테이블: TB_BANNER_GRP_MNG, TB_BANNER_IMG_MNG
- 입력: DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_banner.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_banner_act.jsp:15
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BANNER_GRP_MNG_R001.xml:10
