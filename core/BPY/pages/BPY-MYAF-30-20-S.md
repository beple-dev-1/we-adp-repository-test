--- 꼬리표 ---
id: BPY-MYAF-30-20-S / system: BPY / 기능: 비플페이 앱 > MY 가맹점 > tb_affiliation_my_news_info 조회 > tb_affiliation_my_news_info 수정 / 과업: []

--- 화면명세 ---
화면명: tb_affiliation_my_news_info 수정
목적: tb_affiliation_my_news_info 수정 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-MYAF-30-S

--- 업무 ---
- 요소: 화면 / 업무: 가맹점 소식 삭제 action / 처리: 쓰기 / 테이블: TB_AFFILIATION_MY_NEWS_INFO / 입력: 앱코드, 가맹점ID, REG_DTTM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_news_del_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_news_del_d001_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_NEWS_INFO_D001.xml:10
- 요소: 화면 / 업무: 가맹점 소식 조회 / 처리: 읽기 / 테이블: TB_AFFILIATION_MY_NEWS_INFO, TB_AFFILIATION_MY, TB_BP_AFLT_MNG / 입력: 앱코드, 가맹점ID, REG_DTTM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_news_upd_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_news_upd_r001_act.jsp:15 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_NEWS_INFO_R002.xml:10
- 요소: 화면 / 업무: 가맹점 소식 수정 action / 처리: 쓰기 / 테이블: TB_AFFILIATION_MY_NEWS_INFO / 입력: NEWS_TITLE, NEWS_CONTENT, UPD_MEMB_CD, OPEN_YN, 앱코드, 가맹점ID, REG_DTTM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_news_upd_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_news_upd_u001_act.jsp:15 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_NEWS_INFO_U001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 페이지나가기 / 앵커: BPY-MYAF-30-20-S-e07 / 해설: 페이지나가기
- 구분: 기능 / 좌표: id=upd_btn / 라벨: 수정하기 / 앵커: BPY-MYAF-30-20-S-e08 / 해설: 수정하기
- 구분: 기능 / 좌표: id=del_btn / 라벨: 삭제하기 / 앵커: BPY-MYAF-30-20-S-e09 / 해설: 삭제하기
- 구분: 항목 / 좌표: id=title_ipt / 라벨: 소식 제목을 입력하세요. / 앵커: BPY-MYAF-30-20-S-e10 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=content_ipt / 라벨: 소식 내용을 입력하세요. / 앵커: BPY-MYAF-30-20-S-e11 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=open_yn / 라벨: open_yn / 앵커: BPY-MYAF-30-20-S-e12 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/my_aflt_news_upd_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
