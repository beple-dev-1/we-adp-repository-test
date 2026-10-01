# 비대면 최근결제매장 삭제 (onln_aff_mng_d001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-10-10-S | 비대면 결제매장 상세정보 | BPY-ONAF-10-10-S-e09 |

## 입력

- 가맹점ID (AFLT_ID)

## 출력

- (없음)

## 데이터 처리

### 비대면 최근결제매장 삭제 (TB_ONLN_AFF_MNG_D001)

- 종류: DELETE
- 테이블: TB_ONLN_AFF_MNG
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD), 가맹점ID (AFLT_ID)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.onln_aff_mng_d001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/onln_aff_mng_d001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_MNG_D001.xml:10
