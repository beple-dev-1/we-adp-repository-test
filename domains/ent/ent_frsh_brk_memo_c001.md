# 다과 메모 등록 (ent_frsh_brk_memo_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-SNCK-20-S | 메모 | 화면 |

## 입력

- FRSH_BRK_SEQ
- MEMO_SEQ
- MEMO_TYPE
- 내용 (CTNT)
- 회원코드 (MEMB_CD)
- ADM_USER
- ADM_USER_NM

## 출력

- MEMO_SEQ
- MSG
- 코드 (CODE)

## 데이터 처리

### 메모 메모 seq 채번 (TB_ENT_FRSH_BRK_MEMO_R002)

- 종류: SELECT
- 테이블: TB_ENT_FRSH_BRK_MEMO
- 입력: FRSH_BRK_SEQ

### 다과 메모 내역 저장 (TB_ENT_FRSH_BRK_MEMO_C002)

- 종류: INSERT
- 테이블: TB_ENT_FRSH_BRK_MEMO, TB_MEMBER
- 입력: FRSH_BRK_SEQ, MEMO_SEQ, MEMO_TYPE, 내용 (CTNT), 회원코드 (MEMB_CD), ADM_USER, ADM_USER_NM

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_frsh_brk_memo_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_frsh_brk_memo_c001_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MEMO_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MEMO_C002.xml:10
