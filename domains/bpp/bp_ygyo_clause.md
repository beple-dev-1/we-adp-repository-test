# 요기요_약관 (bp_ygyo_clause)

- 처리: 쓰기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-YGYO-30-S | 요기요_메인화면 | 화면 |

## 입력

- 앱코드 (APP_CD)
- 회원코드 (MEMB_CD)

## 출력

- 코드 (CODE)
- MSG

## 데이터 처리

### 요기요_약관동의_수정 (BP_YGYO_CLAUSE_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_clause.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_clause_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.BP_YGYO_CLAUSE_U001.xml:10
