--- 꼬리표 ---
id: BPY-MYAF-30-10-S / system: BPY / 기능: 비플페이 앱 > MY 가맹점 > tb_affiliation_my_news_info 조회 > tb_affiliation_my_news_info 등록 / 과업: []

--- 화면명세 ---
화면명: tb_affiliation_my_news_info 등록
목적: tb_affiliation_my_news_info 등록 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-MYAF-30-S

--- 업무 ---
- 요소: 화면 / 업무: 마이가맹점 소식관리 등록 / 처리: 읽기·쓰기 / 테이블: TB_AFFILIATION_MY, TB_BP_AFLT_MNG, TB_AFFILIATION_MY_NEWS_INFO / 입력: 가맹점ID, NEWS_TITLE, NEWS_CONTENT, 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_news_reg_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_news_reg_c001_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R012.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_NEWS_INFO_C001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 페이지나가기 / 앵커: BPY-MYAF-30-10-S-e05 / 해설: 페이지나가기
- 구분: 기능 / 좌표: id=reg_btn / 라벨: 등록하기 / 앵커: BPY-MYAF-30-10-S-e06 / 해설: 등록하기
- 구분: 항목 / 좌표: id=title_ipt / 라벨: 소식 제목을 입력하세요. / 앵커: BPY-MYAF-30-10-S-e07 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=content_ipt / 라벨: 소식 내용을 입력하세요. / 앵커: BPY-MYAF-30-10-S-e08 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/my_aflt_news_reg_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
