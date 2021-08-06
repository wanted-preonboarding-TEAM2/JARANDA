import ROLE from './role.js';

export const NO_LOGIN = [
  { to: '/parent/search', title: '자란다선생님 보기' },
  { to: '/index_teacher', title: '선생님 지원하기' },
  { to: '/help', title: '이용안내' },
  { to: '/signin', title: '로그인/회원가입' },
];

export const TEACHER = [
  { to: '/teacher/student_management', title: '학생관리' },
  { to: '/teacher/class_management', title: '수업관리' },
  { to: '/teacher/search', title: '학생찾기' },
];

export const PARENT = [
  { to: '/parent/search', title: '선생님보기' },
  { to: '/parent/request_recommendation', title: '신청서작성하기' },
  { to: '/parent/recommendation', title: '신청내역' },
  { to: '/parent/visit', title: '방문일정' },
  { to: '/story', title: '방문일지' },
];

export const ADMIN = [
  { to: '/admin/teacher', title: '선생님 관리' },
  { to: '/admin/parent', title: '학부모 관리' },
  { to: '/admin', title: '관리자' },
];

const ACCEPTED_PAGE_BY_ROLE = {
  [ROLE.NO_LOGIN]: NO_LOGIN,
  [ROLE.TEACHER]: TEACHER,
  [ROLE.PARENT]: PARENT,
  [ROLE.ADMIN]: ADMIN,
};

export default ACCEPTED_PAGE_BY_ROLE;
