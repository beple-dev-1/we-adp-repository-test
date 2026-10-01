# 선물함 > 모바일 상품권 회원가입 > 약관 상세 조회 (zero_gift_join_r002)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MGC-GIFT-10-S | 선물함 > 모바일 상품권 회원가입 | 화면 |

## 입력

- CLAUSE_NO
- 판매채널코드 (SALE_CHANNEL)

## 출력

- CODE
- MSG
- CONTENT

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_gift_join_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zpp/zero_gift_join_r002_act.jsp:33
