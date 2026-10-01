# 엔터프라이즈_소멸예정 비플머니 내역 조회 (ent_zero_mny_expr_list_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MNY-10-20-S | 엔터프라이즈_소멸예정 비플머니 내역 | 화면 |

## 입력

- 페이지번호 (PAGE_NO)
- PAGE_SIZE

## 출력

- 총건수 (TOTAL_CNT)
- 총금액 (TOTAL_AMT)
- 소멸 예정 비플머니 (REC)

## 데이터 처리

### 만료예정 비플머니 내역 조회 (paging) (TB_MNY_TRAN_MST_R003)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MEMBER_MNY, TB_MEMBER_APP, TB_MNY_ACU_DTL
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD), FROMCNT, TOCNT

### 소멸예정 비플머니 내역 조회(count) (TB_MNY_TRAN_MST_R004)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MEMBER_MNY, TB_MEMBER_APP, TB_MNY_ACU_DTL
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_mny_expr_list_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_mny_expr_list_r001_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R004.xml:10
