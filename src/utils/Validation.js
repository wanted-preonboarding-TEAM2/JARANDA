export const idValidation = id => {
  const Regex = /^[a-z]{1}[0-9a-z]+$/;

  if (!Regex.test(id)) {
    return {
      result: false,
      message: '아이디는 영어로 시작해야합니다.',
    };
  }

  return {
    result: true,
  };
};

export const pwValidation = password => {
  const Regex = /^.*(?=^.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).*$/;

  if (password.length < 8) {
    return {
      result: false,
      message: '비밀번호는 8자 이상 입니다.',
    };
  }

  if (!Regex.test(password)) {
    return {
      result: false,
      message: '비밀번호는 영어/숫자/특수문자가 포함되어야합니다.',
    };
  }

  return { result: true, message: '' };
};

export const nameValidation = name => {
  const Regex = /^[가-힣]+$/;

  if (!Regex.test(name)) {
    return {
      result: false,
      message: '이름은 한글만 가능합니다.',
    };
  }

  return { result: true, message: '' };
};
