--- 꼬리표 ---
id: BPY-MYAF-30-S / system: BPY / 기능: 비플페이 앱 > MY 가맹점 > tb_affiliation_my_news_info 조회 / 과업: []

--- 화면명세 ---
화면명: tb_affiliation_my_news_info 조회
목적: tb_affiliation_my_news_info 조회 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 가맹점 소식 삭제 action / 처리: 쓰기 / 테이블: TB_AFFILIATION_MY_NEWS_INFO / 입력: 앱코드, 가맹점ID, REG_DTTM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_news_del_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_news_del_d001_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_NEWS_INFO_D001.xml:10
- 요소: 화면 / 업무: 가맹점 소식 조회 / 처리: 읽기 / 테이블: TB_AFFILIATION_MY_NEWS_INFO, TB_AFFILIATION_MY, TB_BP_AFLT_MNG / 입력: 앱코드, 가맹점ID, PAGE_SIZE, 페이지 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_news_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_news_list_r001_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_NEWS_INFO_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 다음 소식보기 / 앵커: BPY-MYAF-30-S-e01 / 해설: 다음 소식보기
- 구분: 기능 / 좌표: id=back / 라벨: 뒤로가기 / 앵커: BPY-MYAF-30-S-e02 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=new_reg_btn / 라벨: 새로운 소식 등록하기 / 앵커: BPY-MYAF-30-S-e03 / 해설: 새로운 소식 등록하기
- 구분: 안내 / 좌표: class=content-none / 라벨: 아직 등록된 소식이 없어요. / 앵커: - / 해설: 등록된 소식이 없으면 빈 목록 안내를 보여준다. 첫 줄은 '아직 등록된 소식이 없어요.'로 바뀌었고, 둘째 줄 '고객에게 새로운 소식을 전해보세요.'는 그대로다.

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/my_aflt_news_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
