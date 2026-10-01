# 요기요_즐겨찾기등록 (bp_ygyo_favorites_c001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-YGYO-10-S | 요기요 가맹점 상세(Y211) | 화면 |
| BPG-YGYO-30-10-S | 요기요 가게 목록(정렬·지도) | 화면 |
| BPG-YGYO-30-20-S | 요기요 즐겨찾기 등록매장 | 화면 |
| BPG-YGYO-30-S | 요기요_메인화면 | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- SHOP_ID
- SHOP_NAME
- 즐겨찾기여부 (BOOKMARK_YN)
- IMG_URL
- PICK_YN

## 출력

- 코드 (CODE)
- MSG

## 데이터 처리

### 요기요_즐겨찾기_정보변경 (TB_MEMBER_APP_YGYO_AFLT_C001)

- 종류: INSERT
- 테이블: TB_MEMBER_APP_YGYO_AFLT
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), SHOP_ID, SHOP_NAME, 즐겨찾기여부 (BOOKMARK_YN), IMG_URL, PICK_YN

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_favorites_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_favorites_c001_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_AFLT_C001.xml:10
