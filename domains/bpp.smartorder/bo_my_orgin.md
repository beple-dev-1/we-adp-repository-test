# 비플오더 원산지 (bo_my_orgin)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-20-S | 비플오더 메뉴관리 카테고리 | 화면 |
| BPG-OBO-30-S | 비플오더 메뉴관리 옵션 | 화면 |
| BPG-OBO-50-S | 비플오더 메뉴관리 메뉴 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- 가맹점명 (AFLT_NM)
- BUSINESS
- 카테고리 (CTGRY)
- AFLT_ADDRS
- 가맹점주소2 (AFLT_ADDRS2)
- AFLT_TEL_NO
- IMG_PATH
- IMG_FILE_NM
- IMG_FILE_EXT
- DATE_CURRENT
- DAY_NM
- MNF_MIN_TM
- MNF_MAX_TM
- ODR_MIN_REQ
- ODR_PRIVIL
- 비플가맹점순번 (BP_AFLT_SEQ)
- ORIGIN_INFO

## 데이터 처리

### 가맹점원장조회(by bp_aflt_seq) (TB_BP_AFLT_MY_R006)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_orgin.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_orgin_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R006.xml:10
