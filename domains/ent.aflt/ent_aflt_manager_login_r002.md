# 엔터프라이즈 가맹점pc_매니저 조회 (앱 버전) (ent_aflt_manager_login_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBOA-10-10-20-S | 엔터프라이즈 가맹점pc_매니저 로그인(앱 버전) | 화면 |

## 입력

- MOB_NO

## 출력

- CODE
- MSG
- MEMB_NM
- MEMB_CD

## 데이터 처리

### 회원정보 조회 (by mob_no) (TB_MEMBER_R029)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 휴대폰번호 (MOB_NO), DYNAMIC_0

### 등록 된 마이 가맹점 조회(MEMB_CD) (TB_BP_AFLT_MY_R016)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY_IMG_INFO, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_UPJONG, TB_BP_AFLT_MNG, TB_BP_AFLT_APY, TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP, TB_CTGR_CATG_CD
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_manager_login_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_manager_login_r002_act.jsp:32
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R029.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R016.xml:10
