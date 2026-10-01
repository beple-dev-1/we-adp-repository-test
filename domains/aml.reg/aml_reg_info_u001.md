# 고객확인서등록_기본정보등록(act) (aml_reg_info_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-30-S | 고객확인서등록_기본정보등록 | 화면 |

## 입력

- 가맹점 고객확인서 채번 (AML_SEQ)
- AC
- CI
- 수정 여부 (MODIFY_YN)
- CORP_NO
- SHOP_NM
- SHOP_ENG_NM
- 가맹점 설립일자 (AFLT_ESTA_DT)
- CORP_ESTA_DT
- BIZ_TYPE
- AFLT_NATION
- AFLT_ADDR
- AFLT_ADDR2
- AFLT_ZIP_CD
- AFLT_PHONE_NO
- AFLT_EMAIL
- HQ_ZIP_CD
- HQ_ADDR
- HQ_ADDR2
- HQ_PHONE_NO
- CORP_TP
- OBJECTIVES
- OBJECTIVES_TX
- COPR_HYUNGTEA
- 기업형태 기타내용 (COPR_HYUNGTEA_TX)
- IPO_YN
- STOCK_EXCHANGE
- STOCK_EXCHANGE_TX
- 작성상태 (PAGE_STEP)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 고객확인서 (기본 정보) 수정 (TB_BP_AFLT_AML_U002)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_AML
- 입력: CORP_NO, SHOP_NM, SHOP_ENG_NM, 가맹점 설립일자 (AFLT_ESTA_DT), CORP_ESTA_DT, BIZ_TYPE, AFLT_NATION, AFLT_ZIP_CD, AFLT_ADDR, AFLT_ADDR2, AFLT_PHONE_NO, AFLT_EMAIL, HQ_ZIP_CD, HQ_ADDR, HQ_ADDR2, HQ_PHONE_NO, CORP_TP, OBJECTIVES, OBJECTIVES_TX, COPR_HYUNGTEA, 기업형태 기타내용 (COPR_HYUNGTEA_TX), IPO_YN, STOCK_EXCHANGE, STOCK_EXCHANGE_TX, 작성상태 (PAGE_STEP), 가맹점 고객확인서 채번 (AML_SEQ)

- 공통 헤더 처리(이 업무 아님): TB_BP_AFLT_AML_TOKEN_R001, TB_BP_AFLT_AML_TOKEN_U001, TB_BP_AFLT_AML_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_info_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_info_u001_act.jsp:18
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_U002.xml:10
