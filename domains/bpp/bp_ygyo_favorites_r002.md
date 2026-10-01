# 요기요_즐겨찾기_정보조회_단건 (bp_ygyo_favorites_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-YGYO-10-S | 요기요 가맹점 상세(Y211) | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- SHOP_ID

## 출력

- 코드 (CODE)
- MSG
- REC

## 데이터 처리

### 요기요_즐겨찾기_정보조회단건 (TB_MEMBER_APP_YGYO_AFLT_R002)

- 종류: SELECT
- 테이블: TB_MEMBER_APP_YGYO_AFLT
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), SHOP_ID

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_favorites_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_favorites_r002_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_AFLT_R002.xml:10
