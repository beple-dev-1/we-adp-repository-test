# 얼굴 삭제 (ent_robot_face_mng_d001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-34-10-S | 얼굴 등록, 삭제기능 | 화면 |

## 입력

- (없음)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 사용자 얼굴 이미지 정보 수정 (TB_USER_FACE_MNG_U001)

- 종류: UPDATE
- 테이블: TB_USER_FACE_MNG
- 입력: FACE_IMG, 앱코드 (APP_CD), 처리상태 (PROC_ST), REG_DTTM, DEL_DTTM, 회원코드 (MEMB_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_robot_face_mng_d001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_robot_face_mng_d001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_USER_FACE_MNG_U001.xml:10
