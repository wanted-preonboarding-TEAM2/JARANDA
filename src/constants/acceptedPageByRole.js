import ROLE from './role.js';
import ROUTES from './routesPath.js';

export const NO_LOGIN = [
  { to: `${ROUTES.PARENT}/search`, title: '자란다선생님 보기' },
  { to: `${ROUTES.APPLY_TEACHER}`, title: '선생님 지원하기' },
  { to: `${ROUTES.HELP}`, title: '이용안내' },
  { to: `${ROUTES.SIGNIN}`, title: '로그인/회원가입' },
];

export const TEACHER = [
  { to: `${ROUTES.TEACHER}/student_management`, title: '학생관리' },
  { to: `${ROUTES.TEACHER}/class_management`, title: '수업관리' },
  { to: `${ROUTES.TEACHER}/search`, title: '학생찾기' },
];

export const PARENT = [
  { to: `${ROUTES.PARENT}/search`, title: '선생님보기' },
  { to: `${ROUTES.PARENT}/request_recommendation`, title: '신청서작성하기' },
  { to: `${ROUTES.PARENT}/recommendation`, title: '신청내역' },
  { to: `${ROUTES.PARENT}/visit`, title: '방문일정' },
  { to: `${ROUTES.STORY}`, title: '방문일지' },
];

export const ADMIN = [
  { to: `${ROUTES.ADMIN}/teacher`, title: '선생님 관리' },
  { to: `${ROUTES.ADMIN}/parent`, title: '학부모 관리' },
  { to: `${ROUTES.ADMIN}`, title: '관리자' },
];

const ACCEPTED_PAGE_BY_ROLE = {
  [ROLE.NO_LOGIN]: NO_LOGIN,
  [ROLE.TEACHER]: TEACHER,
  [ROLE.PARENT]: PARENT,
  [ROLE.ADMIN]: ADMIN,
};

export default ACCEPTED_PAGE_BY_ROLE;
