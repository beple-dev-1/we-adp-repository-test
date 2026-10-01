# 요기요_배송주소_삭제(상태값수정) (tb_member_app_ygyo_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-YGYO-40-10-S | 기타 주소 (edit) | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- ADDR_SEQ

## 출력

- 코드 (CODE)
- MSG

## 데이터 처리

### 요기요_배송주소_삭제(상태값수정) (TB_MEMBER_APP_YGYO_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP_YGYO
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), ADDR_SEQ

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.tb_member_app_ygyo_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/tb_member_app_ygyo_u001_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_U001.xml:10
