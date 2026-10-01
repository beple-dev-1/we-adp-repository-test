# 엔터프라이즈 가맹점pc_매니저 로그인처리 (앱 버전) (ent_aflt_manager_login_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBOA-10-10-20-S | 엔터프라이즈 가맹점pc_매니저 로그인(앱 버전) | 화면 |

## 입력

- MOB_NO
- CERTIFY_NUM
- MEMB_NM
- MEMB_CD

## 출력

- CODE
- MSG
- AFLT_CNT

## 데이터 처리

### 등록 된 마이 가맹점 조회(MEMB_CD) (TB_BP_AFLT_MY_R016)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY_IMG_INFO, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_UPJONG, TB_BP_AFLT_MNG, TB_BP_AFLT_APY, TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP, TB_CTGR_CATG_CD
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

### PC가맹점어드민 사용자별 사이트 조회 (TB_PC_AFLT_BO_USER_SITE_R001)

- 종류: SELECT
- 테이블: TB_PC_AFLT_BO_USER_SITE, TB_PC_AFLT_BO_SITE
- 입력: USER_ID

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_manager_login_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_manager_login_r001_act.jsp:32
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R016.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_SITE_R001.xml:10
