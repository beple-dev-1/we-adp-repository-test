# 이용약관 (CLAULIST0000)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MGC-COMN-10-10-20-S | 위치기반 서비스 이용약관 | 화면 |
| MGC-COMN-10-10-30-S | 마케팅(이벤트) 정보 수신 동의 | 화면 |
| MGC-COMN-10-10-40-S | 제로페이 이벤트 참여를 위한 개인정보 제3자 제공에 대한 동의 | 화면 |

## 입력

- 사용구분 (USE_TP)

## 출력

- REC
- LOC_AGR_YN
- MRKT_AGR_YN

## 데이터 처리

### 기관별 약관 목록 조회 (TB_CLAUSE_R002)

- 종류: SELECT
- 테이블: TB_CLAUSE
- 입력: 이용기관ID (ORG_ID), DYNAMIC_0

### 약관 동의여부 조회(선택) (TB_MEMBER_APP_R008)

- 종류: SELECT
- 테이블: TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CLAULIST0000.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/localgift/conf/claulist/CLAULIST0000_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R008.xml:10
