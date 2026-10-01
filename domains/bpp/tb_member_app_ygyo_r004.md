# 요기요_배송주소_수정대상조회(SEQ) (tb_member_app_ygyo_r004)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-YGYO-40-10-S | 기타 주소 (edit) | 화면 |
| BPG-YGYO-40-S | 기타 주소 (addr) | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- ADDR_SEQ

## 출력

- MSG
- 코드 (CODE)
- REC

## 데이터 처리

### 요기요_배송주소_수정대상조회(SEQ) (TB_MEMBER_APP_YGYO_R004)

- 종류: SELECT
- 테이블: TB_MEMBER_APP_YGYO
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), ADDR_SEQ

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.tb_member_app_ygyo_r004.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/tb_member_app_ygyo_r004_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_R004.xml:10
