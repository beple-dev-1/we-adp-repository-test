# 사용자정보_상태변경 (brnd_gift_member_stop_u002)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-BRND-20-S | 브랜드상품권 회원 서비스 중지 | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- 회원명 (MEMB_NM)
- 휴대폰번호 (MOB_NO)

## 출력

- MSG
- 코드 (CODE)

## 데이터 처리

### 사용자 상태변경 (TB_MEMBER_BRND_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER
- 입력: 회원코드 (MEMB_CD)

### 사용자 상태변경 MEMB_APP (TB_MEMBER_APP_BRND_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_member_stop_u002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_member_stop_u002_act.jsp:37
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_BRND_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_BRND_U001.xml:10
