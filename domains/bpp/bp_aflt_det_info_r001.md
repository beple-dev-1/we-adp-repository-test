# 온라인가맹점신청 업종코드 조회 화면 (bp_aflt_det_info_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-AFLT-40-S | 가맹점 정보 입력 | 화면 |

## 입력

- KEYWORD

## 출력

- REC
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 업종 코드 조회 (TB_CTGRY_CODE_R001)

- 종류: SELECT
- 테이블: TB_CTGRY_CODE
- 입력: DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_det_info_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_det_info_r001_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGRY_CODE_R001.xml:10
