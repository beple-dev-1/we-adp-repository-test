# MY가맹정 > 가맹점인증API 조회 (zero_my_prvt_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-MYAF-40-S | MY가맹점 > 가맹점 인증 | 화면 |

## 입력

- BIZ_NO
- MOB_NO

## 출력

- REC
- FLAG
- 가맹점ID (AFLT_ID)
- 비플가맹점순번 (BP_AFLT_SEQ)
- BP_AFLT_ID

## 데이터 처리

### 마이가맹점 검증(직가맹기준으로 ) (TB_BP_AFLT_MNG_R004)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MNG, TB_CTGR_CATG, TB_AFFILIATION_MY_DETAIL, TB_BP_AFLT_APY, TB_BP_AFLT_MNG, TB_AFFILIATION_MY
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_my_prvt_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_my_prvt_r001_act.jsp:34
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R004.xml:10
