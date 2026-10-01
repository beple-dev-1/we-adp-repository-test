# 식권제로페이 함께결제 대상자 조회 (zero_tgt_list_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-PAY-10-20-S | 식권제로페이 함께결제 (list) | 화면 |
| HIT-PAY-10-20-S | 식권제로페이 함께결제 (list) | 화면 |

## 입력

- REQ_USER_NM
- REQ_PAGE
- REC_INDEX

## 출력

- ORG_TP
- ORG_ID
- ORG_NM
- BIZ_NO
- CARD_NO
- BANK_CD
- ACCT_NO
- LMT_SEQ
- LMT_NM
- CLS_DSP_NM
- CLS_DSP_SEQ
- TOT_CNT
- REC_CNT
- RESP_REC
- 부서코드 (DEPT_CD)
- 부서명 (DEPT_NM)

## 데이터 처리

### 회원정보 조회 (by mob_no) (TB_MEMBER_R029)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 휴대폰번호 (MOB_NO), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_tgt_list_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_tgt_list_r001_act.jsp:30
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R029.xml:10
