# 위치기반서비스 이용약관 동의여부 변경 (CLAULIST0011_U01)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MGC-COMN-10-10-20-S | 위치기반 서비스 이용약관 | 화면 |

## 입력

- LOC_AGR_YN

## 출력

- (없음)

## 데이터 처리

### 위치정보 수집 및 이용 동의 (TB_MEMBER_APP_U013)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: LOC_AGR_YN, 앱코드 (APP_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CLAULIST0011_U01.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/localgift/conf/claulist/CLAULIST0011_U01_act.jsp:23
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U013.xml:10
